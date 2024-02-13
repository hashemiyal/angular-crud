import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name:'format',
standalone:true
})
export class myPip implements PipeTransform{

transform(value:string) {
return '-'+value+'-';
}
}