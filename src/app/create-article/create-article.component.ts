import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../Services/article.service';
import { Router } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
router:Router=inject(Router);
articleService:ArticleService=inject(ArticleService);
ngOnInit(){
  $(document).ready(function(){
    $('select').formSelect();
  });
}
send(form :NgForm){
this.articleService.createArticle(form.value);
this.router.navigateByUrl('/articles');
}
}
