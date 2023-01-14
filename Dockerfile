FROM node:12
WORKDIR /front-app
COPY . .
RUN npm install --force
RUN npm i -g @angular/cli@8
RUN ng build --prod
FROM nginx:alpine
COPY --from=node /front-app/dist/vishusaWeb /usr/share/nginx/html
EXPOSE 80