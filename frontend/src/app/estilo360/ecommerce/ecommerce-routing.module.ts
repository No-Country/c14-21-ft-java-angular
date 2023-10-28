import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: async () =>
            (await import('./pages/home/home.module')).HomeModule,
    },
    {
        path: 'product',
        loadChildren: async () =>
            (await import('./pages/product/product.module')).ProductModule,
    },
    {
        path: 'checkout',
        loadChildren: async () =>
            (await import('./pages/checkout/checkout.module')).CheckoutModule,
    },
    {
        path: 'profile',
        loadChildren: async () =>
            (await import('./pages/eprofile/eprofile.module')).EprofileModule,
    },
    {
        path: 'products',
        loadChildren: async () =>
            (await import('./pages/products-grid/products-grid.module'))
                .ProductsGridModule,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EcommerceRoutingModule {}
