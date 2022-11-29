docker stop nodeserver 
docker rm nodeserver 
docker build -t nodeserv .

docker run -d -it -p 8080:80 --name nodeserver nodeserv