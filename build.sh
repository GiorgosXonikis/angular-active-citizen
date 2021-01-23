echo 'Build for Environment' $NODE_ENV

if [[ $NODE_ENV == "integration" ]]
then
  ng build --configuration staging
elif [[ $NODE_ENV == "production" ]]
then
  ng build --prod
fi
