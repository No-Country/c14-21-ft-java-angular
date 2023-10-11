import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { GalleriaModule } from 'primeng/galleria';
import { SharedModule } from 'src/app/estilo360/shared/shared.module';

@NgModule({
    declarations: [ProductComponent],
    imports: [CommonModule, ProductRoutingModule, SharedModule, GalleriaModule],
})
export class ProductModule {}
