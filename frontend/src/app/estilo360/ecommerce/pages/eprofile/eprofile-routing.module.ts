import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EprofileMenuComponent } from './components/eprofile-menu/eprofile-menu.component';
import { EprofileInfoComponent } from './components/eprofile-info/eprofile-info.component';
import { EprofilePurchasesComponent } from './components/eprofile-purchases/eprofile-purchases.component';

const routes: Routes = [
    {
        path: '',
        component: EprofileMenuComponent,
        children: [
            {
                path: 'my-info',
                component: EprofileInfoComponent,
            },
            {
                path: 'purchases',
                component: EprofilePurchasesComponent,
            },
            {
                path: '',
                redirectTo: 'my-info',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EprofileRoutingModule {}
