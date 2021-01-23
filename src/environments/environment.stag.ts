import {defaultEnv} from './environment.default';

const stagingEnv = {
  name: 'Staging',

  production: false,

  host: 'http://staging'
};
export const environment = Object.assign(defaultEnv, stagingEnv);
