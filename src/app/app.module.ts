import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {AngularFireModule} from "@angular/fire/compat";
import {MessagingService} from "./service/messaging-service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBpk2M7YGRvX-S0DxUds_Oxhq-Fv3SZPLM",
      authDomain: "udpt-2023.firebaseapp.com",
      projectId: "udpt-2023",
      storageBucket: "udpt-2023.appspot.com",
      messagingSenderId: "958350586161",
      appId: "1:958350586161:web:b736f4e993798649094010",
      measurementId: "G-GKVZFFQGVJ"
    })
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
