import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
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

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 2
        }
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

    thumbnailsPosition: string = 'left';

    ngOnInit(): void {
        this.resizeThumnails();
    }


    resizeThumnails(){
        if (window.innerWidth < 1035) {
            this.thumbnailsPosition = 'bottom';
        } else {
            this.thumbnailsPosition = 'left';
        }
        // Detecta el tamaño de la pantalla y ajusta thumbnailsPosition
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1035) {
                this.thumbnailsPosition = 'bottom';
            } else {
                this.thumbnailsPosition = 'left';
            }
        });
    }
}
