### DOCKER

# List running containers
docker ps

# Start containers with build
docker-compose up --build

# Stop containers
docker-compose down

# Docker build with tag
docker build . --tag tag-name

# Exec bash in container:
docker exec -it container_id bash

# List images
docker images

# Delete image (with force -f)
docker rmi -f image_id

# Delete all containers using the following command:
docker rm -f $(docker ps -a -q)

# List Volumes:
docker volume ls

# Delete all volumes using the following command:
docker volume rm $(docker volume ls -q)

## Push image to Docker Hub
1. Create repo in Dockerhub
   
2. Login locally in Dockerhub account

3. Build and tag the image from Dockerfile
   ```docker build . --tag <tag_name>```
   
   ```docker build . --tag node14-angular```
   
4. Tag the image with the Dockerhub repo name
   ```docker tag <image_name> <repo_tag>```

    ```docker tag node14-angular gxodocker/active-citizen-dockerhub-repo:node14-angular```

5. Push image
    ``` docker push <repo_tag>```
   
    ``` docker push gxodocker/active-citizen-dockerhub-repo:node14-angular```

6. Pull the image
    ```docker pull <repo_tag>```
   
    ```docker pull gxodocker/active-citizen-dockerhub-repo:node14-angular```
