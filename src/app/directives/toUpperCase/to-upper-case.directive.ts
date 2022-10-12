import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appToUpperCase]'
})
export class ToUpperCaseDirective {
    @HostListener('ngModelChange', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        this.toUpperCase();
    }

   
    constructor(private el: ElementRef) { }


    toUpperCase(): void {
        this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }

}

