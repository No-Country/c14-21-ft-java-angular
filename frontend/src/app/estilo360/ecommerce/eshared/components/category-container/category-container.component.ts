import { Component, Input } from '@angular/core';
import { tap } from 'rxjs';
import { SearchParams } from 'src/app/estilo360/core/classes/search-params';
import { ICategory } from 'src/app/estilo360/core/models/category.model';
import { IProduct } from 'src/app/estilo360/core/models/product.model';
import { ProductsService } from 'src/app/estilo360/core/services/products.service';
import { EBaseComponent } from '../e-base/e-base.component';

@Component({
    selector: 'app-category-container',
    templateUrl: './category-container.component.html',
    styleUrls: ['./category-container.component.scss'],
})
export class CategoryContainerComponent extends EBaseComponent {
    @Input() category: ICategory = null;
    @Input() size: number = 10;
    products: IProduct[] = [];
    private readonly params: SearchParams = new SearchParams();
    constructor(private productsService: ProductsService) {
        super();
    }

    ngOnInit() {
        this.params.size = this.size ?? 10;
        this.getCategoryProducts().subscribe();
    }

    getCategoryProducts() {
        console.log(this.params);

        return this.productsService
            .getByCategory(this.category.id, this.params.getParams())
            .pipe(
                tap((response) => {
                    this.products = response.content;
                })
            );
    }

    seeAllProducts() {
        this.router.navigate([
            '/ecommerce/products/category/' + this.category.id,
        ]);
    }
}
