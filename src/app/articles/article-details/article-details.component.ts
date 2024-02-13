import { Component,OnInit,Input,EventEmitter,Output, inject, AfterViewInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import {Article} from './../../Models/Article';
import{ChangecolorDirective} from './../../../app/mydirectives/changcolor.directive';
import { ArticleService } from './../../Services/article.service';
import{ConfirmDelComponent} from './../../confirm-del/confirm-del.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'article-details',
  standalone: true,
  imports: [ChangecolorDirective,ConfirmDelComponent,CommonModule,RouterModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent implements OnInit {
  articleService=inject(ArticleService);
  selectedarticle:Article=undefined;
  router:Router=inject(Router);
  id:string;
  activerouter:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit() {
      // method 1 using spanshot
      // let id=Number(this.activerouter.snapshot.paramMap.get('id'));
      // this.selectedarticle=this.articleService.getArticle(id)
      // method 2 using params observalbe
      this.activerouter.params.subscribe((data)=>{
       this.id=data['id'];
      });
      this.selectedarticle=this.articleService.getArticle(this.id);
  };
 
}
