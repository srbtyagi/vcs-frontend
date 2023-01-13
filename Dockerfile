FROM node:latest as node
WORKDIR /front-app
COPY . .
RUN npm install
RUN ng build --prod
FROM nginx:alpine
COPY --from=node /app/dist/vishusaWeb /usr/share/nginx/html
EXPOSE 80