import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ExercisePart1';

  activeClass: boolean = false;
  activeStyle: boolean = false;

  red = {
    'redText' : true
  };

  purple = {
    'purpleText' : true
  };

  green = {
    'greenText' : true
  };

  stateChangeClass() {
    if (this.activeClass)
      this.activeClass = false;
    else
      this.activeClass = true;
  }

  stateChangeStyle() {
    if (this.activeStyle)
      this.activeStyle = false;
    else
      this.activeStyle = true;
  }

}
