import { Directive,Renderer2,ElementRef,HostBinding,HostListener,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[changecolor]',
  standalone: true
})
export class ChangecolorDirective {
  @Input()hostcolor:string="";
  constructor(private el:ElementRef,private r:Renderer2) { }
  
  
  @HostListener('mouseenter')change(){
   
     this.r.addClass(this.el.nativeElement,"material-icons")
     
     
  };
  ngOnInit(){
  this.r.setStyle(this.el.nativeElement,'color',this.hostcolor);
  }
}
