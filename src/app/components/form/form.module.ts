import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { FormComponent } from './form.component'

import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
