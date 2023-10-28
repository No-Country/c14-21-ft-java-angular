import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.model';
import { Repository } from '../repository/repository';
import { CategoriesRoutes } from '../routes/categories.routes';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends Repository<ICategory> {
    constructor() {
        super(CategoriesRoutes.PATH);
    }
}
