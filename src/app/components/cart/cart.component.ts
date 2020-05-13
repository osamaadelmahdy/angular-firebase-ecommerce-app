import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { cart } from 'src/app/interfaces/cartItem.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: cart[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getUserCart().subscribe((cart) => {
      console.log(cart);
      this.cartItems = cart.map((data) => {
        return {
          id: data.payload.doc.id,
          name: data.payload.doc.data()['name'],
          price: data.payload.doc.data()['price'],
          amount: data.payload.doc.data()['amount'],
        };
      });
    });
  }
}
