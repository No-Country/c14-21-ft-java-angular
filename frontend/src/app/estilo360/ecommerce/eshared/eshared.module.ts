import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        ShoppingCartComponent,
        CategoryContainerComponent,
        CategoryProductComponent,
    ],
    imports: [CommonModule, SharedModule],
    exports: [
        ShoppingCartComponent,
        CategoryContainerComponent,
        CategoryProductComponent,
    ],
})
export class EsharedModule {}
