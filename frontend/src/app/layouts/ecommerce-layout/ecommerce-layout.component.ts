import { ChangeDetectorRef, Component } from '@angular/core';
import { ELoaderService } from 'src/app/estilo360/ecommerce/core/services/eloader.service';
import { EBaseComponent } from 'src/app/estilo360/ecommerce/eshared/components/e-base/e-base.component';
import { takeUntil, tap } from 'rxjs';
@Component({
    selector: 'app-ecommerce-layout',
    templateUrl: './ecommerce-layout.component.html',
    styleUrls: ['./ecommerce-layout.component.scss'],
})
export class EcommerceLayoutComponent extends EBaseComponent {
    loading = false;
    constructor(
        private loader: ELoaderService,
        private cdRef: ChangeDetectorRef
    ) {
        super();
    }

    ngOnInit() {
        this.loader.$loader
            .pipe(
                takeUntil(this.$unSubscribe),
                tap((loading) => {
                    this.loading = loading;
                    this.cdRef.detectChanges();
                })
            )
            .subscribe();
    }
}
