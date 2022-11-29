FROM node:10 AS builder
RUN apt-get update
WORKDIR /myflix_react
#ENV PATH /myflix_react/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN -rf ./*
COPY --from=builder /myflix_react/build ./
ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 80
EXPOSE 8080