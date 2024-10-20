import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmwxUBlNQe0PVoJYhT61FjtB-kSfodDkQ",
  authDomain: "lab5-reyaant.firebaseapp.com",
  projectId: "lab5-reyaant",
  storageBucket: "lab5-reyaant.appspot.com",
  messagingSenderId: "1092899252661",
  appId: "1:1092899252661:web:b77ce6a3a292d371edd1fc",
  measurementId: "G-BW2YXS4B7Z"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ...appConfig.providers
  ]
}).catch((err) => console.error(err));
