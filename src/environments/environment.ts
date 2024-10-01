import { Environment } from '../app/core/models/environment.model';

export const environment: Environment = {
  production: false,
  firebase: {
    projectId: 'projectId',
    appId: 'appId',
    storageBucket: 'storageBucket',
    apiKey: 'apiKey',
    authDomain: 'authDomain',
    messagingSenderId: 'messagingSenderId',
    measurementId: 'measurementId',
  },
};
