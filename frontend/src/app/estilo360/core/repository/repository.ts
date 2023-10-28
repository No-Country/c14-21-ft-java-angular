import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPaginationResponse } from '../interfaces/pagination-response.interface';

interface IRequestBaseOptions {
    url?: string;
    params?: HttpParams;
}

interface IGetOptions extends IRequestBaseOptions {}

interface IPostOptions extends IRequestBaseOptions {
    body: any;
}

interface IPutOptions extends IPostOptions {}

interface IDeleteOptions extends IRequestBaseOptions {}

@Injectable({ providedIn: 'root' })
export class Repository<T = any> {
    public readonly route = `${environment.API_URL}`;
    protected readonly httpClient = inject(HttpClient);
    constructor(protected readonly path: string = null) {}

    getAll() {
        return this.httpClient.get<any>(`${this.route}${this.path}`);
    }

    getAllPaginated(params?: HttpParams) {
        const fullRoute = this.buildPath();
        return this.httpClient.get<IPaginationResponse<T>>(fullRoute, {
            params,
        });
    }

    getById(id: number) {
        const fullRoute = this.buildPath();
        return this.httpClient.get<T>(`${fullRoute}/${id}`);
    }

    create(formData: Object) {
        const fullRoute = this.buildPath();
        return this.httpClient.post<T>(`${fullRoute}`, formData);
    }

    update(id: number, formData: Object) {
        const fullRoute = this.buildPath();
        return this.httpClient.put(`${fullRoute}/${id}`, formData);
    }

    remove(id: number) {
        const fullRoute = this.buildPath();
        return this.httpClient.delete(`${fullRoute}/${id}`);
    }

    protected get<I = any>(options?: IGetOptions) {
        const { url, params = new HttpParams() } = options || {};
        const fullRoute = this.buildPath(url);
        return this.httpClient.get<I>(fullRoute, { params });
    }

    protected post<I = any>(options?: IPostOptions) {
        const { url, params = new HttpParams(), body } = options || {};
        const fullRoute = this.buildPath(url);
        return this.httpClient.post<I>(fullRoute, body, { params });
    }

    protected put<I = any>(options?: IPutOptions) {
        const { url, params = new HttpParams(), body } = options || {};
        const fullRoute = this.buildPath(url);
        return this.httpClient.put<I>(fullRoute, body, { params });
    }

    protected delete<I = any>(options?: IDeleteOptions) {
        const { url, params = new HttpParams() } = options || {};
        const fullRoute = this.buildPath(url);
        return this.httpClient.delete<I>(fullRoute, { params });
    }

    public buildPath(route?: string) {
        if (!route) {
            return `${this.route}${this.path}`;
        }

        return `${this.route}${this.path}/${route}`;
    }
}
