import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    products = [
        {
            title: 'WAY KANBAS MINI EBONY',
            img: '',
            desription: '',
        },
    ];

    categories = [
        {
            title: 'Category 1',
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
        {
            title: 'Category 2',
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
        {
            title: 'Category 3',
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
    constructor(public router: Router) {}
}
