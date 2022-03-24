FROM node:16.14
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
#generate prisma client
RUN npx prisma generate
#build for production
RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "start"]