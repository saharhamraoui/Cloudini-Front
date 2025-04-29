import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FrontofficeRoutingModule } from './frontoffice/frontoffice-routing.module';
@NgModule({
  declarations: [
  AppComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClipboardModule,
    FormsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
