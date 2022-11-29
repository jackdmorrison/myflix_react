FROM node:17-alpine AS builder
WORKDIR /myflix_react
#ENV PATH /myflix_react/node_modules/.bin:$PATH
COPY myflix_react/package.json ./
RUN npm install 

COPY /myflix_react ./
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /myflix_react/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]