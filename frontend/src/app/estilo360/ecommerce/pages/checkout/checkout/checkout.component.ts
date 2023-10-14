import { Component } from '@angular/core';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
    isLogged = false;
    items = [
        {
            label: 'Elegir Dirección',
            routerLink: 'choose-address',
        },
        {
            label: 'Envío y Pago',
            routerLink: 'payment',
        },
        {
            label: 'Confirmar Pedido',
            routerLink: 'confirm-order',
        },
    ];
}
