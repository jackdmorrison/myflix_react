docker stop nodeserver 
docker rm nodeserver 
docker build -t nodeserv .
docker run -d -p 80:3000 --name nodeserver nodeserv