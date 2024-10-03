FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run","preview" ]