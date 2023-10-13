import { Component } from '@angular/core';

@Component({
    selector: 'app-eprofile-menu',
    templateUrl: './eprofile-menu.component.html',
    styleUrls: ['./eprofile-menu.component.scss'],
})
export class EprofileMenuComponent {
    menu = [
        {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            routerLink: './my-info',
        },
        {
            label: 'Mis Compras',
            icon: 'pi pi-fw pi-shopping-bag',
            routerLink: './purchases',
        },
    ];
}
