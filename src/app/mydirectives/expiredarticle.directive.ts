import { Directive,ElementRef,Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Expiredarticle]',
  standalone: true
})
export class ExpiredarticleDirective {
  
  constructor(private el:ElementRef,private r:Renderer2) { }
  // my own way to impleement this requirement
  // ngOnInit(){
  //   if(this.Expiredarticle){
  //    this.r.removeClass(this.el.nativeElement,"z-depth-4");
  //   }
  // }
  @Input() set Expiredarticle(expired:Boolean){
  if(expired){
    this.r.removeClass(this.el.nativeElement,"z-depth-4");
  }
  };
}
