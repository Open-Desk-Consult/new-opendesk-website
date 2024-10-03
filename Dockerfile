FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# RUN npm build

CMD [ "npm", "preview" ]