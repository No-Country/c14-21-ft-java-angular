import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceLayoutComponent } from './ecommerce-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from 'src/app/estilo360/shared/shared.module';
import { RouterModule } from '@angular/router';
import { EsharedModule } from 'src/app/estilo360/ecommerce/eshared/eshared.module';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
@NgModule({
    declarations: [EcommerceLayoutComponent, NavBarComponent, FooterComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        EsharedModule,
        DynamicDialogModule,
    ],
})
export class EcommerceLayoutModule {}
