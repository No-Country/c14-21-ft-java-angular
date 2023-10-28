import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Repository } from '../repository/repository';
import { ProductsRoutes } from '../routes/products.routes';
import { IPaginationResponse } from '../interfaces/pagination-response.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductsService extends Repository<IProduct> {
    constructor() {
        super(ProductsRoutes.PATH);
    }

    getByCategory(categoryId: number, params: HttpParams) {
        const url = `${ProductsRoutes.GET_BY_CATEGOR}${categoryId}`;
        return this.get<IPaginationResponse<IProduct>>({ url, params });
    }
}
