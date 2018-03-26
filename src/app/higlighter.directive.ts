import { Directive , ElementRef , HostListener , Renderer ,Output , EventEmitter} from '@angular/core';


@Directive({
  selector: '[appHiglighter]'
})
export class HiglighterDirective {

  constructor(private el: ElementRef,private renderer: Renderer) { }
  @Output() scroll: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-body h2');
    this.renderer.setElementStyle(part, 'color', 'white');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-body h2');
    this.renderer.setElementStyle(part, 'color', '');
  }

  @HostListener('click') onclick(){
    
     this.scroll.emit();
  
  }

}
