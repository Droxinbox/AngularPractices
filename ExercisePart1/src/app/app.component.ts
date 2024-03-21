import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExercisePart1';

  message: string = "I was triggered by an event";

  alertNotification() {
    alert(this.message);
  }

  greetings: string = "Hello World"

}
