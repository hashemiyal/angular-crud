import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../Models/Article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../Services/article.service';
import { RouterModule } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-confirm-del',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './confirm-del.component.html',
  styleUrl: './confirm-del.component.css'
})
export class ConfirmDelComponent{
  activeRoute:ActivatedRoute=inject(ActivatedRoute);
  selectedarticle:Article; 
  articleService:ArticleService=inject(ArticleService);
  router:Router=inject(Router);
  ngOnInit() {
    $(document).ready(function(){
     $('.modal').modal();
     $('.modal').modal('open'); 
   });
   let id=(this.activeRoute.snapshot.paramMap.get('id'));
   this.selectedarticle=this.articleService.getArticle(id);
   
   };
   delete(){
   let index =this.articleService.articles.indexOf(this.selectedarticle);
   this.articleService.articles.splice(index,1);
   this.articleService.deleteArticle(this.selectedarticle.id);
   this.router.navigateByUrl('/articles');
   }
 
  
}
