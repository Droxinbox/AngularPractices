import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {
  title: string = 'ExercisePart1';
  textValue: string = "ESTO es UNA prueba de CaPiTalIzar uN tExTo";
}
