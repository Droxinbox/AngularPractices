import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  message: string = "I was triggered by an event";

  alertNotification() {
    alert(this.message);
  }

  greetings: string = "Hello World";
}
