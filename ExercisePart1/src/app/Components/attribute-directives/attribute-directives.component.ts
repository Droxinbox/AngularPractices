import { Component } from '@angular/core';

interface IStyle {
  [nameOfProp: string]: boolean;
}

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
  activeClass: boolean = false;
  activeStyle: boolean = false;

  red:IStyle = {
    'redText' : true
  };

  purple:IStyle = {
    'purpleText' : true
  };

  green:IStyle = {
    'greenText' : true
  };

  stateChangeClass() {
    this.activeClass = !this.activeClass;
  }

  stateChangeStyle() {
    this.activeStyle = !this.activeStyle;
  }
}
