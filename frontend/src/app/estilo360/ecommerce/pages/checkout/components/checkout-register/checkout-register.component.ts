import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-checkout-register',
    templateUrl: './checkout-register.component.html',
    styleUrls: ['./checkout-register.component.scss'],
})
export class CheckoutRegisterComponent {
    @Output() successRegsiter = new EventEmitter<void>();
}
