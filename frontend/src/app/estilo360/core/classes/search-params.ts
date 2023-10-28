import { HttpParams } from '@angular/common/http';

export class SearchParams<T = any> {
    size: number = 10;
    page: number = 1;
    sortBy: string = '';
    sortOrder: string = '';
    search: string = '';
    filters: SearchFilter[] = [];

    addFilter(
        column: Extract<keyof T, string>,
        value: string | number | string[] | number[],
        operator?: FilterOperators
    ) {
        const index = this.filters.findIndex(
            (_filter) => _filter.column == column
        );
        if (index >= 0) {
            this.filters.splice(index, 1);
        }
        let val: string;
        if (Array.isArray(value)) {
            val = value.join(',');
        } else {
            val = `${value}`;
        }
        const filter = new SearchFilter(column, val);
        if (operator) {
            filter.operator = operator;
        }

        this.filters.push(filter);
    }

    removeFilter(column: string) {
        const index = this.filters.findIndex(
            (_filter) => _filter.column == column
        );
        if (index) {
            this.filters.splice(index);
        }
    }

    getParams() {
        const { size, page, search } = this;
        // const sortBy = `${this.sortBy ?? ''}:${this.sortOrder ?? ''}`
        const normalParams = { size, page, search };
        let params = new HttpParams({ fromObject: normalParams });
        this.filters.forEach((filter) => {
            params = params.append(
                `filter.${filter.column}`,
                `${filter.operator}:${filter.value}`
            );
        });
        if (this.sortBy && this.sortOrder) {
            params = params.append(
                'sortBy',
                `${this.sortBy}:${this.sortOrder}`
            );
        }
        return params;
    }
}

class SearchFilter {
    operator: FilterOperators = FilterOperators.EQ;
    constructor(public column: string, public value: string) {}
}

export interface ISearchFilter {
    column: string;
    value: string;
    operator: FilterOperators;
}

export enum FilterOperators {
    EQ = '$eq',
    NOT = '$not',
    IN = '$in',
    GT = '$gt',
    GTE = '$gte',
    LT = '$lt',
    LTE = '$lte',
    BTW = '$btw',
    LIKE = '$ilike',
    SW = '$sw',
    NULL = '$null',
}
