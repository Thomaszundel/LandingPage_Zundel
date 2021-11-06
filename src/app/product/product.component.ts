import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // productID: number = 0;
  // currentProduct: any = null;

  fakeDB: any[] = [
    {
      product:"Apex",
      price: 20.99,
      discription: "First person shooter"
    },
    {
      product:"Path Of Exile",
      price: 25.08,
      discription: "Top down RPG adventure"
    },
    {
      product:"It Takes Two",
      price: 59.99,
      discription: "Mulitplayer adventure"
    },
    {
      product:"Golf With Friends",
      price: 29.50,
      discription: "Multiplayer sports"
    }

  ];

  constructor() { }

  ngOnInit() {
    
    // this.currentProduct = this.fakeDB[this.productID]
  }

}
