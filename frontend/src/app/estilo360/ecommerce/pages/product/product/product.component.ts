import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ICategory } from 'src/app/estilo360/core/models/category.model';
import { IProduct } from 'src/app/estilo360/core/models/product.model';
import { ProductsService } from 'src/app/estilo360/core/services/products.service';
import { EBaseComponent } from '../../../eshared/components/e-base/e-base.component';
import { IProductImage } from 'src/app/estilo360/core/models/image.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent extends EBaseComponent implements OnInit {
    private readonly id: number;
    product: IProduct;
    categories: ICategory[] = [];
    images: IProductImage[] = [];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
        },
        {
            breakpoint: '560px',
            numVisible: 2,
        },
    ];

    sizeOpions = [
        { value: 's', label: 'S' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
    ];

    thumbnailsPosition: string = 'left';

    constructor(private productsService: ProductsService) {
        super();
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            this.notFound();
            return;
        }
        this.id = Number(id);
    }

    ngOnInit(): void {
        this.findProduct().subscribe();
        this.resizeThumnails();
    }

    findProduct() {
        return this.productsService.getById(this.id).pipe(
            catchError((error) => {
                if (error.status === 404) {
                    this.notFound();
                }
                return throwError(() => error);
            }),
            tap((product) => {
                this.product = product;
                this.categories = [product.categoria];
                this.images = this.product.imagenList;
            })
        );
    }

    resizeThumnails() {
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
