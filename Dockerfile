FROM node:lts AS dist
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install

COPY . ./

CMD [ "npm", "run", "build" ]

FROM node:lts AS node_modules
COPY package*.json ./

RUN npm install --prod

FROM node:lts

ARG PORT=3000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY --from=dist dist /usr/src/app/dist
COPY --from=dist prisma /usr/src/app/prisma
COPY --from=node_modules node_modules /usr/src/app/node_modules
COPY . /usr/src/app

EXPOSE $PORT

CMD [ "npm", "run", "start:migrate:prod" ]