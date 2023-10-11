import { Component } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    images = [
        {
            src: 'assets/ecommerce/products/product.jpg',
            thumbnail: 'assets/ecommerce/products/thumbail.png',
        },
        {
            src: 'assets/ecommerce/products/product.jpg',
            thumbnail: 'assets/ecommerce/products/thumbail.png',
        },
        {
            src: 'assets/ecommerce/products/product.jpg',
            thumbnail: 'assets/ecommerce/products/thumbail.png',
        },
        {
            src: 'assets/ecommerce/products/product.jpg',
            thumbnail: 'assets/ecommerce/products/thumbail.png',
        },
        {
            src: 'assets/ecommerce/products/product.jpg',
            thumbnail: 'assets/ecommerce/products/thumbail.png',
        },
        {
            src: 'assets/ecommerce/products/product.jpg',
            thumbnail: 'assets/ecommerce/products/thumbail.png',
        },
    ];

    sizeOpions = [
        { value: 's', label: 'S' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
    ];

    categories = [
        {
            title: 'Productos Relacionados',
            items: [
                {
                    title: 'Product 1',
                    img: 'assets/ecommerce/products/product.jpg',
                    price: 1200,
                    disscount: 0.1,
                },
                {
                    title: 'Product 2',
                    img: 'assets/ecommerce/products/product.jpg',
                    price: 1200,
                    disscount: 0.1,
                },
                {
                    title: 'Product 3',
                    img: 'assets/ecommerce/products/product.jpg',
                    price: 1200,
                    disscount: 0.1,
                },
                {
                    title: 'Product 4',
                    img: 'assets/ecommerce/products/product.jpg',
                    price: 1200,
                    disscount: 0.1,
                },
            ],
        },
    ];
}
