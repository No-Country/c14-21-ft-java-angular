import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { tap } from 'rxjs';
import { SearchParams } from 'src/app/estilo360/core/classes/search-params';
import { ICategory } from 'src/app/estilo360/core/models/category.model';
import { CategoriesService } from 'src/app/estilo360/core/services/categories.service';
import { EBaseComponent } from 'src/app/estilo360/ecommerce/eshared/components/e-base/e-base.component';
import { ShoppingCartComponent } from 'src/app/estilo360/ecommerce/eshared/components/shopping-cart/shopping-cart.component';

@Component({
    selector: 'e-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    providers: [DialogService],
})
export class NavBarComponent extends EBaseComponent {
    categories: ICategory[] = [];
    constructor(
        private dialogService: DialogService,
        private categoriesService: CategoriesService
    ) {
        super();
    }

    ngOnInit() {
        this.getCategories().subscribe();
    }

    getCategories() {
        const params = new SearchParams();
        params.size = 4;
        return this.categoriesService.getAllPaginated(params.getParams()).pipe(
            tap((response) => {
                this.categories = response.content;
            })
        );
    }

    onShowCart() {
        this.dialogService.open(ShoppingCartComponent, {
            styleClass: 'cart-dialog',
        });
    }
}
