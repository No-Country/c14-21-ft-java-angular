export interface IPaginationResponse<T> {
    content: T[];
    pageable: IPageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: IPageableSort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface IPageable {
    pageNumber: number;
    pageSize: number;
    sort: IPageableSort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IPageableSort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}
