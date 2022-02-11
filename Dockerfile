FROM node:16.13-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY src ./
COPY craco.config.js ./
COPY tailwind.config.js ./

CMD ["yarn", "start"]
