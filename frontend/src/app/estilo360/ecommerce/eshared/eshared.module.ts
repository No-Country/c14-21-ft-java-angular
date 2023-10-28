import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { SharedModule } from '../../shared/shared.module';
import { EBaseComponent } from './components/e-base/e-base.component';
import { EpaginationComponent } from './components/epagination/epagination.component';
import { PaginatorModule } from 'primeng/paginator';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EglobalInterceptor } from '../core/interceptor/e-global.interceptor';

@NgModule({
    declarations: [
        ShoppingCartComponent,
        CategoryContainerComponent,
        CategoryProductComponent,
        EBaseComponent,
        EpaginationComponent,
    ],
    imports: [CommonModule, SharedModule, PaginatorModule, HttpClientModule],
    exports: [
        ShoppingCartComponent,
        CategoryContainerComponent,
        CategoryProductComponent,
        EBaseComponent,
        EpaginationComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: EglobalInterceptor,
            multi: true,
        },
    ],
})
export class EsharedModule {}
