docker stop nodeserver 
docker rm nodeserver 
docker build -t nodeserv:1.0 .

docker run -d -it -p 8080:80 --name nodeserver nodeserv:1.0