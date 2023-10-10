import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [ShoppingCartComponent],
    imports: [
        CommonModule,
        StyleClassModule,
        FormsModule,
        ReactiveFormsModule,
        InputMaskModule,
        InputNumberModule,
        InputTextModule,
        ButtonModule,
    ],
    exports: [ShoppingCartComponent, InputNumberModule, InputTextModule],
})
export class EsharedModule {}
