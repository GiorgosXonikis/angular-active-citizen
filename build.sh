echo 'Build for Environment' $NODE_ENV

if [[ $NODE_ENV == "staging" ]]
then
  ng build --configuration staging
elif [[ $NODE_ENV == "production" ]]
then
  ng build --prod
else
  ng build
fi
