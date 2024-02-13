import { Component,EventEmitter,Output,OnInit,ViewChild,ElementRef,AfterViewInit, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FilterService } from '../Services/filter.service';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent{
selectedrb:string='all';
router :Router=inject(Router);
filterService:FilterService=inject(FilterService);
// @Output()
// selectedrbchanged:EventEmitter<string>=new EventEmitter<string>();
// onselectedrbchanged(){
// this.selectedrbchanged.emit(this.selectedrb);
// }
txt:string="";
search(){
this.router.navigateByUrl('/articles?txt='+this.txt);
};
onselectedrbchanged(){
this.filterService.filtertext(this.selectedrb);

}

}
