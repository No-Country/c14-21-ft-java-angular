import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-choose-address',
    templateUrl: './choose-address.component.html',
    styleUrls: ['./choose-address.component.scss'],
})
export class ChooseAddressComponent {
    isLogged = false;
    cart = [
        {
            name: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            quantity: 1,
            price: 1230,
        },
        {
            name: 'Eaque officia cumque nostrum eligendi.',
            quantity: 1,
            price: 1230,
        },
        {
            name: 'Cum voluptate ex, maxime quo reiciendis tempora eligendi possimus',
            quantity: 1,
            price: 1230,
        },
    ];
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    nextStep() {
        this.router.navigate(['../payment'], {
            relativeTo: this.activatedRoute,
        });
    }

    switchLogin() {
        this.isLogged = true;
    }
}
