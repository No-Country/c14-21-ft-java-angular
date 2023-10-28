import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ShoppingCartComponent } from '../../../eshared/components/shopping-cart/shopping-cart.component';
import { Carousel } from 'primeng/carousel';
import { CategoriesService } from 'src/app/estilo360/core/services/categories.service';
import { SearchParams } from 'src/app/estilo360/core/classes/search-params';
import { catchError, tap } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [DialogService],
})
export class HomeComponent {
    products = [
        {
            title: 'WAY KANBAS MINI EBONY',
            img: '',
            desription: '',
        },
        {
            title: 'WAY KANBAS MINI EBONY',
            img: '',
            desription: '',
        },
    ];

    private readonly params = new SearchParams();

    categories = [];
    constructor(private categoriesService: CategoriesService) {}

    ngOnInit() {
        this.getCategories().subscribe();
    }

    getCategories() {
        return this.categoriesService
            .getAllPaginated(this.params.getParams())
            .pipe(
                tap((response) => {
                    this.categories = response.content;
                })
            );
    }
}
