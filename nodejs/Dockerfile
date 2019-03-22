FROM node:10.15.3-alpine

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

ENTRYPOINT ["node", "src/index.js"]
