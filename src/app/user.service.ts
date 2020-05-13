import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fireStore: AngularFirestore) {}

  addNewUser(id, name) {
    this.fireStore.doc('users/' + id).set({
      name: name,
    });
  }
}
