import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(private fireStore: AngularFirestore) {}

  getalldata() {
    return this.fireStore.collection('goods').snapshotChanges();
  }
}
