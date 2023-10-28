import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsGridRoutingModule } from './products-grid-routing.module';
import { ProductsComponent } from './products/products.component';
import { EsharedModule } from '../../eshared/eshared.module';

@NgModule({
    declarations: [ProductsComponent],
    imports: [CommonModule, ProductsGridRoutingModule, EsharedModule],
})
export class ProductsGridModule {}
