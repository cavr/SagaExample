FROM node:8

WORKDIR /usr/src/app


COPY package*.json ./


COPY . .

EXPOSE 40900

CMD ["npm", "run",  "prod"]