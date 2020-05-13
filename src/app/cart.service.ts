import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private fireStore: AngularFirestore, private Auth: AuthService) {}
  addItemToCart(cartItemData) {
    return this.fireStore
      .collection(`users/${this.Auth.uid}/cart`)
      .add(cartItemData);
  }
  getUserCart() {
    return this.fireStore
      .collection(`users/${this.Auth.uid}/cart`)
      .snapshotChanges();
  }
}
