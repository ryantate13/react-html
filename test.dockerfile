FROM ryantate13/node:build

ARG USER_NAME
ARG USER_ID
ARG GROUP_ID

RUN addgroup -g ${GROUP_ID} ${USER_NAME} && adduser -u ${USER_ID} -G ${USER_NAME} -D ${USER_NAME}

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
WORKDIR /app
RUN npm install

COPY jest.config.js /app/jest.config.js
COPY tsconfig.json /app/tsconfig.json
COPY src /app/src
COPY tests /app/tests

USER ${USER_NAME}
CMD node node_modules/.bin/jest --coverage --colors

