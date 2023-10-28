import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'icons',
                data: { breadcrumb: 'Prime Icons' },
                component: IconsComponent,
            },
            { path: '**', redirectTo: '/404' },
        ]),
    ],
    exports: [RouterModule],
})
export class UtilitiesRoutingModule {}
