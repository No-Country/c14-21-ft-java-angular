import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-category-product',
    templateUrl: './category-product.component.html',
    styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent {
    @Input() product: any;
}
