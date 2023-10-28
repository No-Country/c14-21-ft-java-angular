import { Component, Input } from '@angular/core';
import { BehaviorSubject, takeUntil, tap } from 'rxjs';
import { SearchParams } from 'src/app/estilo360/core/classes/search-params';
import { EBaseComponent } from '../e-base/e-base.component';
interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}
@Component({
    selector: 'app-epagination',
    template: `
        <p-paginator
            (onPageChange)="onPageChange($event)"
            [first]="first"
            [rows]="rows"
            [totalRecords]="totalRecords"
            [rowsPerPageOptions]="sizeOptions"
            [showCurrentPageReport]="true"
            currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords}"
        ></p-paginator>
    `,
})
export class EpaginationComponent extends EBaseComponent {
    @Input() params = new BehaviorSubject(new SearchParams());
    @Input() totalRecords = 0;
    first: number = 0;
    rows: number = 10;
    sizeOptions = [10, 20, 30];
    ngOnInit() {
        this.params
            .pipe(
                takeUntil(this.$unSubscribe),
                tap((params) => {
                    this.first = params.page - 1;
                    this.rows = params.size;
                })
            )
            .subscribe();
    }

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
        const params = this.params.getValue();
        params.page = event.page + 1;
        params.size = event.rows;
        this.params.next(params);
    }
}
