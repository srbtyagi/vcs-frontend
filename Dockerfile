FROM node:18 as node
WORKDIR /front-app
COPY . .
RUN npm cache clean --force
RUN npm install
RUN npm i -g @angular/cli
RUN ng build
FROM nginx:alpine
COPY --from=node /front-app/dist/vishusaWeb /usr/share/nginx/html
EXPOSE 80