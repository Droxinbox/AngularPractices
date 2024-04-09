import { Component } from '@angular/core';
import { SecondInjectable } from '../../app.module';

@Component({
  selector: 'app-act-six-my-first-mod',
  templateUrl: './act-six-my-first-mod.component.html',
  styleUrl: './act-six-my-first-mod.component.css'
})
export class ActSixMyFirstModComponent {

  actSixMyFirst: string = "";

  constructor(private value: SecondInjectable) {
    this.actSixMyFirst = value.data;
  }

}
