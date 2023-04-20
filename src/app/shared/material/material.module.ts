import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({

    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatGridListModule,
        MatTableModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatStepperModule
    ],

    exports: [
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatDividerModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatGridListModule,
        MatTableModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatStepperModule
    ]
})

export class MaterialModule { }
