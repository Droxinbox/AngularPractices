import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitaPipe'
})
export class CapitaPipePipe implements PipeTransform {


  transform(query: string): unknown {
    
    const firstPosition = query.toLowerCase();
    const firstLetter = firstPosition.charAt(0);
    const rest = firstPosition.slice(1);
    return firstLetter.toUpperCase() + rest;
    
  }

}
