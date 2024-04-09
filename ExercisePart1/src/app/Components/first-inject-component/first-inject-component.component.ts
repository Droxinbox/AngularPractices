import { Component } from '@angular/core';
import { ProvidersModule } from '../../Modules/providers/providers.module';

@Component({
  selector: 'app-first-inject-component',
  templateUrl: './first-inject-component.component.html',
  styleUrl: './first-inject-component.component.css'
})
export class FirstInjectComponentComponent {

  varOne: string = "";
  varTwo: string = "";

  constructor(private variablesNumber: ProvidersModule) {
    this.varOne = variablesNumber.firstVariable;
    this.varTwo = variablesNumber.secondVariable;
  }
}
