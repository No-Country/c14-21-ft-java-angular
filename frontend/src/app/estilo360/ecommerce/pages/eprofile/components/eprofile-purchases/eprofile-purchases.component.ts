import { Component } from '@angular/core';

@Component({
    selector: 'app-eprofile-purchases',
    templateUrl: './eprofile-purchases.component.html',
    styleUrls: ['./eprofile-purchases.component.scss'],
})
export class EprofilePurchasesComponent {
    purchases = [
        { id: '00001', date: new Date(), total: 12345, status: 'success' },
        { id: '00002', date: new Date(), total: 12345, status: 'danger' },
        { id: '00003', date: new Date(), total: 12345, status: 'warning' },
        { id: '00004', date: new Date(), total: 12345, status: 'info' },
        { id: '00005', date: new Date(), total: 12345, status: 'success' },
    ];
}
