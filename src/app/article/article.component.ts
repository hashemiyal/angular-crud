import { Component,Input,OnInit,EventEmitter,Output, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import {FormsModule} from '@angular/forms';
import {Article} from './../Models/Article';
import {HightlightDirective} from './../mydirectives/hightlight.directive';
import {ChangecolorDirective} from'../mydirectives/changcolor.directive';
import {ExpiredarticleDirective} from './../mydirectives/expiredarticle.directive';
import { ArticleService } from '../Services/article.service';
import { RouterModule } from '@angular/router';
import{myPip} from './../../app/Pips/mypip.pip'
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule,FormsModule,HightlightDirective,ChangecolorDirective,ExpiredarticleDirective,RouterModule,myPip],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
@Input()
article:Article=undefined;
articleService=inject(ArticleService);
like(id:string,like:number){
this.article.likes++;
this.articleService.likeArticle(id,like);

}
}


