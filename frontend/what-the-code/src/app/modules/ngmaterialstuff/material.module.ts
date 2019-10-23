import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatGridListModule,
  MatSelectModule,
  MatSidenavModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSelectModule,
    MatSidenavModule,
    MatFormFieldModule
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSelectModule,
    MatSidenavModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
