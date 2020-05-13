import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { good } from '../../interfaces/good.interface';
import { GoodsService } from 'src/app/goods.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  showAmount: number = null;
  goods = [];
  modalItem = {
    id: '',
    name: '',
    price: '',
    imgurl: '',
  };

  constructor(private data: GoodsService, private cart: CartService) {}

  ngAfterViewInit() {}
  sub: Subscription;
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.data.getalldata().subscribe((data) => {
      data.map((data) => {
        console.log(data.payload.doc.id);
        this.goods.push({
          id: data.payload.doc.id,
          name: data.payload.doc.data()['name'],
          price: data.payload.doc.data()['price'],
          imgurl: data.payload.doc.data()['imgurl'],
        });
      });
    });
  }

  veiwModal(id) {
    this.goods.filter((data) => {
      if (data.id == id) {
        this.modalItem = data;
      }
    });
    console.log(this.modalItem);
  }

  addToCart(id) {
    console.log('done', id);
    this.showAmount = id;
  }

  buy(name, amount, price) {
    let itemData = {
      name,
      amount: +amount,
      price: +price,
    };
    this.cart.addItemToCart(itemData).then(() => {
      this.showAmount = null;
    });
  }
}
