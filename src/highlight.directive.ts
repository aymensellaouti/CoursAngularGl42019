import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor')  bg = this.out;
  constructor() { }
  @HostListener('mouseenter') highlight() {
    this.bg = this.in;
  }
  @HostListener('mouseleave') dehighlight() {
    this.bg = this.out;
  }

}
