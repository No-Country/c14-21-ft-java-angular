import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ELoaderService {
    $loader = new BehaviorSubject(false);

    load() {
        this.$loader.next(true);
    }

    unload() {
        this.$loader.next(false);
    }
}
