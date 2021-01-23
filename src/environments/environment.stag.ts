import {defaultEnv} from './environment.default';

const stagingEnv = {
  name: 'Staging',

  host: 'http://staging'
};
export const environment = Object.assign(defaultEnv, stagingEnv);
