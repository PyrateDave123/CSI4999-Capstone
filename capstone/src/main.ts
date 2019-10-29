import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

var firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyAU1WQY87ptzsZeD7IBwoVexggxOXcqEKg",
  authDomain: "memcomb-8a195.firebaseapp.com",
  databaseURL: "https://memcomb-8a195.firebaseio.com",
  projectId: "memcomb-8a195",
  storageBucket: "memcomb-8a195.appspot.com",
  messagingSenderId: "1064540766139",
  appId: "1:1064540766139:web:1e0c34c8f5ec54c3ab4e9e",
  measurementId: "G-HB8YPKB9GV"
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
