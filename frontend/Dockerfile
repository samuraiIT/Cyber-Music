# Set the base image to node:16-alpine
FROM node:lts-alpine as build

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем приложение внутрь контейнера
COPY . /app/

# Готовим контейнер к сборке
RUN npm install
# RUN npm install --silent && mv node_modules ../

# Делаем билд
RUN npm run build

# Готовим nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Запускаем nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#FROM node:lts-alpine
#ENV NODE_ENV=production
#WORKDIR /usr/src/app
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
#RUN npm install --production --silent && mv node_modules ../
#COPY . .
#EXPOSE 3000
#RUN chown -R node /usr/src/app
#USER node
#CMD ["npm", "start"]
