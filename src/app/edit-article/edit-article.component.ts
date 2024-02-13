import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ArticleService } from '../Services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../Models/Article';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
declare var $:any;
@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent implements OnInit {
router :Router=inject(Router);
articleService:ArticleService=inject(ArticleService);
activeRoute:ActivatedRoute=inject(ActivatedRoute);
selectedarticle:Article; 
@ViewChild('updateform') updateform:NgForm;
ngOnInit(){
  $(document).ready(function(){
    $('select').formSelect();
  });
  let id=(this.activeRoute.snapshot.paramMap.get('id'));
  this.selectedarticle=this.articleService.getArticle(id);
  
};
update(id :string){
 this.articleService.updateArticle(id,this.updateform.value);
 this.router.navigateByUrl('/articles');
}
}
