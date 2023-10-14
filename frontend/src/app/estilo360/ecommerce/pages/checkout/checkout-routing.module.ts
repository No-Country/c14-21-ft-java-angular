import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChooseAddressComponent } from './components/choose-address/choose-address.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

const routes: Routes = [
    {
        path: '',
        component: CheckoutComponent,
        children: [
            {
                path: 'choose-address',
                component: ChooseAddressComponent,
            },
            {
                path: 'payment',
                component: PaymentComponent,
            },
            {
                path: 'confirm-order',
                component: ConfirmOrderComponent,
            },
            {
                path: '',
                redirectTo: 'choose-address',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    bootstrap: [],
})
export class CheckoutRoutingModule {}
