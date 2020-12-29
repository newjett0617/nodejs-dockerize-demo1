FROM node:lts-alpine

WORKDIR /app

COPY index.js /app

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]