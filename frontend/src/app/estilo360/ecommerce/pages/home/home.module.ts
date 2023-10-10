import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { BadgeModule } from 'primeng/badge';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EsharedModule } from '../../eshared/eshared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        CarouselModule,
        BadgeModule,
        DynamicDialogModule,
        EsharedModule,
    ],
})
export class HomeModule {}
