docker stop nodeserver 
docker rm nodeserver 
docker build -t jackmoinc/myflix_react:remote .
docker push jackmoinc/myflix_react:remote
docker pull jackmoinc/mynetflix_react:remote
docker run -d -it -p 8080:80 --name nodeserver jackmoinc/myflix_react:remote