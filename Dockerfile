FROM node:12 as node
WORKDIR /front-app
COPY . .
RUN npm cache clean --force
RUN npm install --force
RUN npm i -g @angular/cli@8
RUN ng build --prod
FROM nginx:alpine
COPY --from=node /front-app/dist/vishusaWeb /usr/share/nginx/html
EXPOSE 80