import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyFirstModule } from './my-first-module/my-first.module';

import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';

import { StructureDirectiveComponent } from './Components/structure-directive/structure-directive.component';
import { AttributeDirectivesComponent } from './Components/attribute-directives/attribute-directives.component';

import { capitalizeDirective } from './directives/capitalize.directive';
import { CustomDirectiveComponent } from './Components/custom-directive/custom-directive.component'; // ngModel

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StructureDirectiveComponent,
    AttributeDirectivesComponent,
    capitalizeDirective,
    CustomDirectiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModule,
    FormsModule // ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
