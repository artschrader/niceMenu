import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule],
  exports: [MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule],
})
export class MaterialModule { }