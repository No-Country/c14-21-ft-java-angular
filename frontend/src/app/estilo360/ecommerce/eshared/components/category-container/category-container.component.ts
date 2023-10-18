import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-category-container',
    templateUrl: './category-container.component.html',
    styleUrls: ['./category-container.component.scss'],
})
export class CategoryContainerComponent {
    @Input() category: any;
}
