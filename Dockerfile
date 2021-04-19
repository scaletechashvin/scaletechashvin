# ASHVIN

FROM node:10

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start:prod" ]