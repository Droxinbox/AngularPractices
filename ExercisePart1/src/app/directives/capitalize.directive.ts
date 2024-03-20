import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[Capitalize]"
})

export class CapitalizeDirective {

    constructor (private variable: ElementRef) {
        variable.nativeElement.style.textTransform = 'capitalize';
    }

}