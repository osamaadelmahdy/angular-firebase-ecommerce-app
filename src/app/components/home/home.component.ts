import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { good } from '../../interfaces/good.interface';
import { GoodsService } from 'src/app/goods.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private data: GoodsService) {}

  ngAfterViewInit() {}
  sub: Subscription;
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  goods = [];

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

  modal_item = {
    id: '',
    name: '',
    price: '',
    imgurl: '',
  };

  veiwModal(i) {
    this.goods.filter((data) => {
      if (data.id == i) {
        this.modal_item = data;
      }
    });
    console.log(this.modal_item);
  }

  addToCart() {
    console.log('done');
  }
}
