import {defaultEnv} from './environment.default';

const productionEnv = {
  name: 'Production',

  production: true,

  host: 'http://aws-url'
};
export const environment = Object.assign(defaultEnv, productionEnv);
