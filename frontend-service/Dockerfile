FROM node:16-alpine
#specifying the working directory
WORKDIR /usr/app
#copy package.json to the working directory
COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 5000

RUN npm run build 
# configure nginx
FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

CMD [ "npm","run", "serve" ]