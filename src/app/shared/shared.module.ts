import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {PostalCodeDirective} from './postal-code-mask.directive';

@NgModule({
  imports: [
    // material modules
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,

    // rest modules
    FormsModule
  ],
  exports: [
    // material modules
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,

    // rest modules
    FormsModule,
    PostalCodeDirective
  ],
  declarations: [PostalCodeDirective]
})
export class SharedModule {
}
