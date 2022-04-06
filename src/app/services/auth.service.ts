import { Injectable } from '@angular/core';
import firebase from 'firebase/app'
import 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth:AngularFireAuth) { }

  loginUserWithProvider(provider: any) {
    return this.auth.signInWithPopup(provider)
  }

  GoogleLogin() {
    return this.loginUserWithProvider(new firebase.auth.GoogleAuthProvider());
   } 
}
