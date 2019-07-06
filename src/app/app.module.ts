import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Module } from './scenario1/scenario1.module';
import { Scenario2Module } from './scenario2/scenario2.module';
import { Scenario3Module } from './scenario3/scenario3.module';
import { FormsModule } from '@angular/forms';
import { Scenario4Module } from './scenario4/scenario4.module';
import { Scenario5Module } from './scenario5/scenario5.module';
import { Scenario6Module } from './scenario6/scenario6.module';
import { Scenario7Component } from './scenario7/scenario7.component';
import { Child4Component } from './scenario7/child4/child4.component';
import { Child5Component } from './scenario7/child5/child5.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario7Component,
    Child4Component,
    Child5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Scenario1Module,
    Scenario2Module,
    Scenario3Module,
    Scenario4Module,
    Scenario5Module,
    Scenario6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
