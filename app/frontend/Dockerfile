FROM node:16-alpine

WORKDIR /app_frontend

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]