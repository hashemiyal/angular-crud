import { Directive,ElementRef,HostListener,Renderer2 ,} from '@angular/core';

@Directive({
  selector: '[appHightlight]',
  standalone: true
})
export class HightlightDirective {

  constructor(private el:ElementRef,private r:Renderer2) { }
  @HostListener('mouseenter') OnMouseEnter(){
  this.r.addClass(this.el.nativeElement,"hightlight")
  }
  @HostListener('mouseout') OnMouseOut(){
    this.r.removeClass(this.el.nativeElement,"hightlight") 
  }
}
