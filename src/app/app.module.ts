import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./components/layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {StudentsModule} from "./students/students.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        HttpClientModule,
        StudentsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
