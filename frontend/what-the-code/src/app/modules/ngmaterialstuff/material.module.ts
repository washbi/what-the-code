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
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    MatFormFieldModule,
    DragDropModule
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
    MatFormFieldModule,
    DragDropModule
  ]
})
export class MaterialModule {}
