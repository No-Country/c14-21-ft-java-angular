import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/estilo360/core/models/product.model';

@Component({
    selector: 'app-category-product',
    templateUrl: './category-product.component.html',
    styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent {
    @Input() product: IProduct = null;
}
