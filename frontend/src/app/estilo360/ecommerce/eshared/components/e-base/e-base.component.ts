import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
    selector: 'app-e-base',
    template: '',
})
export class EBaseComponent {
    readonly router = inject(Router);
    readonly activatedRoute = inject(ActivatedRoute);
    $unSubscribe = new Subject<void>();

    notFound() {
        this.router.navigate(['/404']);
    }

    ngOnDestroy(): void {
        this.$unSubscribe.next();
        this.$unSubscribe.complete();
    }
}
