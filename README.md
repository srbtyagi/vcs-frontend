# VishusaWeb

docker build -t appui .
docker run -d --name appui -p 80:80 appui
docker rm $(docker ps --filter status=exited -q)

    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)

