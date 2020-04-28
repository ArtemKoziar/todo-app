// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCTqu7JS1qYDpLMKfKnYVP2tTrjT1bfDfo',
    authDomain: 'todo-tasks-manager.firebaseapp.com',
    databaseURL: 'https://todo-tasks-manager.firebaseio.com',
    projectId: 'todo-tasks-manager',
    storageBucket: 'todo-tasks-manager.appspot.com',
    messagingSenderId: '142799446865',
    appId: '1:142799446865:web:2190334d01f0dd9b'
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
