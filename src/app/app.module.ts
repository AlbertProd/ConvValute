import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Добавлено
import { HttpClientModule } from '@angular/common/http'; // Добавлено

import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Добавлено
    HttpClientModule // Добавлено
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }