import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

    @Input()
    rating = 0;
    stars: boolean[];

    constructor() {
    }

    ngOnInit() {
        this.stars = [];
        for (let i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    }

}
