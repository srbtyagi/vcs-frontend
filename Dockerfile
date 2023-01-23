FROM node
WORKDIR /front-app
COPY . .
RUN npm cache clean --force
RUN npm install
RUN npm i -g @angular/cli
RUN ng build --configuration production
FROM nginx:alpine
COPY --from=node /front-app/dist/vishusaWeb /usr/share/nginx/html
EXPOSE 80