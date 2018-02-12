import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule, MatDialogModule],
  exports: [MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule, MatDialogModule],
})
export class MaterialModule { }
