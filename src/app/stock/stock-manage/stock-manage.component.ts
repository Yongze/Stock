import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  public stocks: Array<Stock>;
  constructor() {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, 'first', 1.99, 3.5, 'desc of first stock', ['IT', 'Internet']),
      new Stock(2, 'second', 2.99, 4.5, 'desc of second stock', ['Finance']),
      new Stock(3, 'third', 3.99, 2.5, 'desc of third stock', ['Internet']),
      new Stock(4, 'forth', 4.99, 1.5, 'desc of forth stock', ['Finance']),
      new Stock(5, 'fifth', 5.99, 4.0, 'desc of fifth stock', ['IT', 'Finance']),
      new Stock(6, 'sixth', 6.99, 5.0, 'desc of sixth stock', ['IT', 'Internet', 'Finance']),
      new Stock(7, 'seventh', 7.99, 4.5, 'desc of seventh stock', ['IT', 'Finance']),
      new Stock(8, 'eighth', 8.99, 0.5, 'desc of eighth stock', ['Finance', 'Internet'])
    ];
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
