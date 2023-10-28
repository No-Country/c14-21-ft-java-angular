import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ELoaderService } from '../services/eloader.service';

@Injectable({ providedIn: 'root' })
export class EglobalInterceptor implements HttpInterceptor {
    private requestCount = 0;

    constructor(private eloader: ELoaderService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.requestCount++;
        this.eloader.load();
        const headers = new HttpHeaders();
        // .append('Authorization', '');
        return next.handle(req.clone({ headers })).pipe(
            finalize(() => {
                this.requestCount--;
                if (this.requestCount === 0) {
                    this.eloader.unload();
                }
            })
        );
    }
}
