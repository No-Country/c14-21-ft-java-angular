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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EcommerceRoutingModule {}
