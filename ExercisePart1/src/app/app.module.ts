import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { capitalizeDirective } from './directives/capitalize.directive';
import { FormsModule } from '@angular/forms'; // ngModel

@NgModule({
  declarations: [
    AppComponent,
    capitalizeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
