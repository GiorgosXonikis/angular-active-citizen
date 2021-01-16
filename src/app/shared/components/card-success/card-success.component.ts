import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-card-success',
    templateUrl: './card-success.component.html',
    styleUrls: ['./card-success.component.scss']
})
export class CardSuccessComponent implements OnInit {

    @Input() title: string;
    @Input() subTitle: string;
    @Input() body: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
