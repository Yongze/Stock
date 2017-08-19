import {Component, OnInit} from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
    selector: 'app-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

    stock: Stock;
    constructor() {
    }

    ngOnInit() {
        this.stock = new Stock(1, 'first', 1.99, 3.5, 'desc of first stock', ['IT', 'Internet'])
    }

}
