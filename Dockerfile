FROM node:10.23.1-alpine3.9
MAINTAINER Giorgos Xonikis

RUN apk add chromium

WORKDIR /usr/src/app

ENV CHROME_BIN=/usr/bin/chromium-browser

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY . ./

RUN npm run build:prod

EXPOSE 8080

CMD [ "node", "server.js" ]
