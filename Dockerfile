FROM node:14-alpine

ENV HOST '0.0.0.0'
EXPOSE ${PORT:-80}

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm ci --production

USER node
CMD ["npm", "start"]