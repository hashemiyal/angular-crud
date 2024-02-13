import { Component,OnInit,Input,QueryList,ViewChild,ElementRef,AfterViewInit,Output,EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {ArticlesComponent} from './articles/articles.component';
import {FilterComponent} from'./filter/filter.component';
import { ArticleService } from './Services/article.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,FormsModule,ArticlesComponent,FilterComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  export class AppComponent implements OnInit {
  title = 'myapp';
  activeRoute:ActivatedRoute=inject(ActivatedRoute);
  showloader:boolean=false;
  articleService:ArticleService=inject(ArticleService);
  router:Router=inject(Router);
 ngOnInit(){
 this.articleService.getArticles();
 this.activeRoute.fragment.subscribe(data=>{
 this.scrol(data);
 });
 this.router.events.subscribe((routerEvent :Event)=>{
if(routerEvent instanceof NavigationStart){
this.showloader=true;
}
if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
this.showloader=false;
}
});
 };
scrol(section:string="footer"){
if(section){document.getElementById(section).scrollIntoView({behavior:'smooth'});}
}
}
