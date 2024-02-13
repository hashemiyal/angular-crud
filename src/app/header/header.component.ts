import { Component,OnInit,Input, inject } from '@angular/core';
import { MainMenuComponent} from './main-menu/main-menu.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

declare var $: any; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainMenuComponent,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
title='header';
router:Router=inject(Router);
 ngOnInit()  
  {  
    $(document).ready(() => {  
      $(".dropdown-trigger").dropdown();
    });  
   
  }
  register(){
  // this.router.navigate(['register'],{relativeTo:this.activerouter});
  // navigating between routes programmitically   
     this.router.navigateByUrl('register');
  }

}

