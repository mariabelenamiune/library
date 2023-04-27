import { Component, NgModule } from '@angular/core';
import { MaterialModule } from '@app/material/material.module';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class Spinner {
}

@NgModule({
    exports: [Spinner],
    declarations: [Spinner],
    imports: [MaterialModule]
})
export class SpinnerModule { }
