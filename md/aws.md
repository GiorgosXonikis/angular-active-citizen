Install AWS CLI
For the latest version of the AWS CLI: https://awscli.amazonaws.com/AWSCLIV2.pkg

Install Elastic Beanstalk CLI
brew update
brew install awsebcli
eb --version

Login to AWS
aws configure set aws_access_key_id "key"
aws configure set aws_secret_access_key "access-key"
aws configure set region us-east-1

GitLab CI
deploy:
stage: deploy
image:
name: banst/awscli
entrypoint: [""]
script:
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
