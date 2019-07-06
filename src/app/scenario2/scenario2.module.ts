import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario2Component } from './scenario2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ Scenario2Component ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  Scenario2Component
  ]
})
export class Scenario2Module { }
