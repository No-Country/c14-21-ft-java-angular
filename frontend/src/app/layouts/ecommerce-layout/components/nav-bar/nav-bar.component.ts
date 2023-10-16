import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ShoppingCartComponent } from 'src/app/estilo360/ecommerce/eshared/components/shopping-cart/shopping-cart.component';

@Component({
    selector: 'e-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    providers: [DialogService],
})
export class NavBarComponent {
    constructor(public router: Router, private dialogService: DialogService) {}
    onShowCart() {
        this.dialogService.open(ShoppingCartComponent, {
            styleClass:'cart-dialog'
        });
    }
}
