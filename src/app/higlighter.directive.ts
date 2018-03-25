import { Directive , ElementRef , HostListener , Renderer} from '@angular/core';

@Directive({
  selector: '[appHiglighter]'
})
export class HiglighterDirective {

  constructor(private el: ElementRef,private renderer: Renderer) { }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-body h2');
    this.renderer.setElementStyle(part, 'color', 'white');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-body h2');
    this.renderer.setElementStyle(part, 'color', '');
  }

}
