import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BestTableComponent} from './best-table/best-table.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataInterceptor} from "./data.interceptor";
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DataInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    BestTableComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
