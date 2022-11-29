FROM node:10
RUN apt-get update
WORKDIR .
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./
EXPOSE 3000
CMD ["npm", "start"]