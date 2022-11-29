FROM node:10
RUN apt-get update
WORKDIR /myflix_react
ENV PATH /myflix_react/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./
EXPOSE 3000
CMD ["npm", "start"]