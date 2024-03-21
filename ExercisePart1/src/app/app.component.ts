import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ExercisePart1';

  name: string = "";
  showName: string = "";

  shareName() {
    this.showName = this.name;
  }

}
