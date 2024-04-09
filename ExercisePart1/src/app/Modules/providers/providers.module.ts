import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstInjectComponentComponent } from '../../Components/first-inject-component/first-inject-component.component';
import { ActSixProvidersModComponent } from '../../Components/act-six-providers-mod/act-six-providers-mod.component';

@NgModule({
  declarations: [
    FirstInjectComponentComponent,
    ActSixProvidersModComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstInjectComponentComponent,
    ActSixProvidersModComponent
  ]
})

@Injectable()
export class ProvidersModule {
  firstVariable: string = "one";
  secondVariable: string = "two";
}