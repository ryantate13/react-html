FROM ryantate13/node:build

ARG USER_NAME
ARG USER_ID
ARG GROUP_ID

RUN addgroup -g ${GROUP_ID} ${USER_NAME} && adduser -u ${USER_ID} -G ${USER_NAME} -D ${USER_NAME}

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
WORKDIR /app
RUN npm install

COPY tsconfig.json /app/tsconfig.json
COPY src /app/src
COPY README.md /app/README.md

USER ${USER_NAME}
CMD node node_modules/.bin/tsc && \
    cp package.json README.md dist && \
    echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > dist/.npmrc && \
    true
