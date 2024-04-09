import { Component } from '@angular/core';
import { SecondInjectable } from '../../app.module';

@Component({
  selector: 'app-act-six-providers-mod',
  templateUrl: './act-six-providers-mod.component.html',
  styleUrl: './act-six-providers-mod.component.css'
})
export class ActSixProvidersModComponent {

  actSixProdMod: string = "";

  constructor(private value: SecondInjectable) {
    this.actSixProdMod = value.data;
  }

}
