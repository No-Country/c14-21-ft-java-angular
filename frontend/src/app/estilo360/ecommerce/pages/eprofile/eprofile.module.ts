import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EprofileRoutingModule } from './eprofile-routing.module';
import { EprofileComponent } from './eprofile/eprofile.component';
import { EprofileMenuComponent } from './components/eprofile-menu/eprofile-menu.component';
import { EprofileInfoComponent } from './components/eprofile-info/eprofile-info.component';
import { EprofilePurchasesComponent } from './components/eprofile-purchases/eprofile-purchases.component';
import { SharedModule } from 'src/app/estilo360/shared/shared.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [
        EprofileComponent,
        EprofileMenuComponent,
        EprofileInfoComponent,
        EprofilePurchasesComponent,
    ],
    imports: [
        CommonModule,
        EprofileRoutingModule,
        SharedModule,
        PanelMenuModule,
        TableModule,
    ],
})
export class EprofileModule {}
