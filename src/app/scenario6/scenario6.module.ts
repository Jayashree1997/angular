import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Parent2Component } from './parent2/parent2.component';
@NgModule({
  declarations: [ Child2Component, Child3Component, Parent2Component],
  imports: [
    CommonModule
  ],
  exports: [ Child2Component, Child3Component, Parent2Component]
})
export class Scenario6Module { }
