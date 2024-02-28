FROM node:21-alpine3.19

ADD package.json /tmp/package.json

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install -g npm@latest
RUN chmod +x ./src/app.ts

RUN rm -rf build

RUN cd /tmp && npm install -q

RUN npm dedupe

# Code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src

RUN npm run-script build

CMD ["node", "build/src/app.js"]