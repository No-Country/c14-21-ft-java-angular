import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChooseAddressComponent } from './components/choose-address/choose-address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { StepsModule } from 'primeng/steps';
import { CheckoutLoginComponent } from './components/checkout-login/checkout-login.component';
import { CheckoutRegisterComponent } from './components/checkout-register/checkout-register.component';
import { SharedModule } from 'src/app/estilo360/shared/shared.module';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        CheckoutComponent,
        ChooseAddressComponent,
        PaymentComponent,
        ConfirmOrderComponent,
        CheckoutLoginComponent,
        CheckoutRegisterComponent,
    ],
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        SharedModule,
        StepsModule,
        TableModule,
    ],
})
export class CheckoutModule {}
