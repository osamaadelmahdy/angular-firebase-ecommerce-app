import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<any>;
  constructor(private fireauth: AngularFireAuth) {
    this.user = fireauth.user;
  }

  signUp(email: string, password: string) {
    return this.fireauth.createUserWithEmailAndPassword(email, password);
  }

  logIn(email: string, password: string) {
    return this.fireauth.signInWithEmailAndPassword(email, password);
  }
  logOut() {
    return this.fireauth.signOut();
  }
}
