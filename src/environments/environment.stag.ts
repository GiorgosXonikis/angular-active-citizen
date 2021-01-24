import {defaultEnv} from './environment.default';

const stagingEnv = {
  name: 'Staging',

  production: false,

  host: 'https://active-citizen-api-staging.herokuapp.com'
};
export const environment = Object.assign(defaultEnv, stagingEnv);
