import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-checkout-login',
    templateUrl: './checkout-login.component.html',
    styleUrls: ['./checkout-login.component.scss'],
})
export class CheckoutLoginComponent {
    @Output() successLogin = new EventEmitter<void>();
}
