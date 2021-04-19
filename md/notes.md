## Install Angular

### Enable the NodeSource repository
`curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`

### Install node and npm
`sudo apt install nodejs`

### Install Angular
`npm install -g @angular/cli`


## DOCKER
### List running containers
`docker ps`

### Docker build with tag
`docker build . --tag <tag_name>`

### Start containers with build
`docker-compose up --build`

### Start containers from image with bash
`docker run -it <image_id> bash`

### Exec bash in container:
`docker exec -it <container_id> bash`

### Stop containers
`docker-compose down`

### List images
`docker images`

### Delete image (with force -f)
`docker rmi -f <image_id>`

### Delete all containers using the following command:
`docker rm -f $(docker ps -a -q)`

### List Volumes:
`docker volume ls`

### Delete all volumes using the following command:
`docker volume rm $(docker volume ls -q)`

### Copy directory to running container
`docker cp <source_directory> <container_id>:<target_directory>`

## Push image to Docker Hub
1. Create repo in Dockerhub
   
2. Login locally in Dockerhub account

3. Build and tag the image from Dockerfile
   `docker build . --tag <tag_name>`
   `docker build . --tag node-angular11`
   
4. Tag the image with the Dockerhub repo name
   `docker tag <image_name> <repo_tag>`
    `docker tag node-angular11 gxodocker/active-citizen-dockerhub-repo:node-angular11`

5. Push image
    `docker push <repo_tag>`
    `docker push gxodocker/active-citizen-dockerhub-repo:node-angular11`

6. Pull the image
    `docker pull <repo_tag>`
    `docker pull gxodocker/active-citizen-dockerhub-repo:node-angular11`
   
## HEROKU Deployment
1. Create App on Heroku

2. Run 
   `heroku authorizations:create`
   
3. Copy token

4. Run 
   `heroku git:remote -a <app_name>`
   ex: `heroku git:remote -a georgios-xonikis-online-resume`

4. Store it on GitLab Variables

5. Run
    `heroku stack:set heroku-20`
   
# Prepare deployment
1. Move dev dependencies to dependencies
   "@angular/cli": "~11.1.0",
   "@angular/compiler-cli": "~11.1.0",
   "typescript": "^4.0.3"

2. Create Procfile to define the start app script

3. Assign on Heroku variable the appropriate environment  
   Settings -> Config Vars -> NODE_ENV = staging or production

4. On packages.json set the build to script to run "bash build.sh"

5. On build.sh, assign the build parameters depending on the Heroku NODE_ENV


## AWS Deployment

### Install AWS CLI
For the latest version of the AWS CLI: https://awscli.amazonaws.com/AWSCLIV2.pkg

### Install Elastic Beanstalk CLI
`brew update`
`brew install awsebcli`
`eb --version`

### Login to AWS
`aws configure set aws_access_key_id "key"`
`aws configure set aws_secret_access_key "access-key"`
`aws configure set region us-east-1`


### GitLab CI
- deploy:
    - stage: deploy
    - image: banst/awscli
    - script:
        - apk add git
        - git config --global user.email $AWS_USER_EMAIL
        - git config --global user.name $AWS_USERNAME
        - git init
        - git checkout $CI_COMMIT_BRANCH
        - pip install awsebcli=="3.14.8"
        - aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
        - aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
        - aws configure set region us-east-1
        - aws s3 rm s3://$S3_BUCKET/$APP_NAME --recursive
