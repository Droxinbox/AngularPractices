import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './Components/attribute-directives/attribute-directives.component';

import { capitalizeDirective } from './directives/capitalize.directive';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveComponent } from './Components/custom-directive/custom-directive.component'; // ngModel

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    capitalizeDirective,
    CustomDirectiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
