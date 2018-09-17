import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    let r = firebase.initializeApp({
      apiKey: "AIzaSyDWhqfaRk_XA-adwagGcSRJWflgHOsCW_M",
      authDomain: "ng-recipe-book-979c4.firebaseapp.com",
    });
  }
}
