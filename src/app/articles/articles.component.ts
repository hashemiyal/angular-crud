import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component,DoCheck,Input, OnChanges, OnInit, inject } from '@angular/core';
import {Article} from './../Models/Article';
import {ArticleComponent} from './../article/article.component';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../Services/article.service';
import { ArticleDetailsComponent } from './../articles/article-details/article-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterService } from '../Services/filter.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule,ArticleComponent,ArticleDetailsComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
articles:Article[];
articleService=inject(ArticleService);
activeRoute:ActivatedRoute=inject(ActivatedRoute);
filterService :FilterService=inject(FilterService);
// selectedarticle:Article=undefined;
router:Router=inject(Router);
txt:string='';
ngOnInit(){
this.articles=this.activeRoute.snapshot.data['articles'];
// this.articleService.getAllArticles().subscribe((articles:Article[])=>{
// this.articles=articles;
// });
// this.articleService.selectarticle.subscribe((sa:Article)=>{
// this.selectedarticle=sa;
//});
// this is for search data through input
this.activeRoute.queryParams.subscribe((data)=>{
 this.txt=data['txt'];
 if(this.txt===null ||this.txt==undefined||this.txt===''){
  this.articles=this.activeRoute.snapshot.data['articles'];
  }else{
    this.articles=this.articleService.articles.filter(article=>{return article.title.toLocaleLowerCase().match(this.txt.toLocaleLowerCase());});
  }
});
//this is for filter data through radio buttons
this.filterService.filter.subscribe(data=>{
if(data=='all'){
this.articles=this.activeRoute.snapshot.data['articles'];
}else{
  this.articles=this.articleService.articles.filter((article)=>{
    return article.category.toLocaleLowerCase()===data.toLocaleLowerCase();
    });
}

}); 

}

}
