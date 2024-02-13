import { Subject } from "rxjs";
import { ArticleService } from "./article.service";
import { inject } from "@angular/core";

export class FilterService{
articleService:ArticleService=inject(ArticleService);
// using subject for filtering
filter=new Subject<string>();
filtertext(txt:string){
this.filter.next(txt);
};

}