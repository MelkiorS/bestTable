import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { BestTableComponent } from './best-table/best-table.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataInterceptor} from "./data.interceptor";

const INTERCEPTOR_PROVIDER : Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DataInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    BestTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
