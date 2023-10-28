import { IBaseModel } from './base.model';
import { ICategory } from './category.model';
import { IProductImage } from './image.model';
import { IOffer } from './offer.model';
import { IProductType } from './product-type.model';

export interface IProduct extends IBaseModel {
    nombre: string;
    precio: number;
    detalles: string;
    stock: number;
    talle: string;
    tipo: IProductType;
    categoria: ICategory;
    oferta: IOffer;
    imagenList: IProductImage[];
}
