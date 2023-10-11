import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
const PRIMENG_MODULES = [
    CommonModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    CarouselModule,
    BadgeModule,
    DynamicDialogModule,
    SelectButtonModule,
    InputNumberModule,
    InputTextModule,
];
@NgModule({
    declarations: [],
    imports: [...PRIMENG_MODULES],
    exports: [...PRIMENG_MODULES],
})
export class SharedModule {}
