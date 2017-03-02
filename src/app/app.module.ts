import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDvLUIpq0XkgazXfI3HCK3PjqW8blR_cwU",
    authDomain: "reditum-b2e3c.firebaseapp.com",
    databaseURL: "https://reditum-b2e3c.firebaseio.com",
    storageBucket: "reditum-b2e3c.appspot.com",
    messagingSenderId: "945645223570"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
