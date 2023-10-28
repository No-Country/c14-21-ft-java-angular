import { Component } from '@angular/core';
import {
    catchError,
    tap,
    throwError,
    BehaviorSubject,
    takeUntil,
    mergeMap,
} from 'rxjs';
import { ICategory } from 'src/app/estilo360/core/models/category.model';
import { CategoriesService } from 'src/app/estilo360/core/services/categories.service';
import { EBaseComponent } from '../../../eshared/components/e-base/e-base.component';
import { IProduct } from 'src/app/estilo360/core/models/product.model';
import { ProductsService } from 'src/app/estilo360/core/services/products.service';
import { SearchParams } from 'src/app/estilo360/core/classes/search-params';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends EBaseComponent {
    categoryId: number = null;
    category: ICategory = null;
    products: IProduct[] = [];
    params = new BehaviorSubject(new SearchParams());
    totalItems = 0;
    constructor(
        private categoriesService: CategoriesService,
        private productsService: ProductsService
    ) {
        super();
        this.activatedRoute.params
            .pipe(
                takeUntil(this.$unSubscribe),
                tap((params) => {
                    const id = params['category'];
                    this.categoryId = Number(id);
                }),
                mergeMap(() => this.findCategory())
            )
            .subscribe();
    }

    ngOnInit() {
        this.params
            .pipe(
                takeUntil(this.$unSubscribe),
                tap((params) => {
                    this.getProductsByCategory(params).subscribe();
                })
            )
            .subscribe();
    }

    findCategory() {
        return this.categoriesService.getById(this.categoryId).pipe(
            catchError((error) => {
                if (error.status === 404) {
                    this.notFound();
                }
                return throwError(() => error);
            }),
            tap((category) => {
                this.category = category;
                const params = new SearchParams();
                this.params.next(params);
            })
        );
    }

    getProductsByCategory(_params?: SearchParams) {
        const params = _params ?? new SearchParams();
        return this.productsService
            .getByCategory(this.categoryId, params.getParams())
            .pipe(
                tap((response) => {
                    this.products = response.content;
                    this.totalItems = response.totalElements;
                })
            );
    }
}
