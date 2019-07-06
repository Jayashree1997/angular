import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child5Component } from './child5/child5.component';
import { Child4Component } from './child4/child4.component';

@NgModule({
  declarations: [Child4Component, Child5Component],
  imports: [
    CommonModule
  ],
  exports: [
    Child4Component, Child5Component
  ]
})
export class Scenario7Module { }
