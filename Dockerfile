FROM node:10.23.1-alpine3.9
MAINTAINER Giorgos Xonikis

RUN apk update && apk add bash

RUN apk add chromium

ENV CHROME_BIN=/usr/bin/chromium-browser

WORKDIR /app

COPY . ./

RUN npm install -g @angular/cli

RUN npm install

RUN npm postinstall

EXPOSE 8080

CMD [ "node", "server.js" ]

# "postinstall": "ng build --output-path dist  --aot --prod"
