import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Article } from "../Models/Article"
import { Observable, map } from "rxjs";
import { inject } from "@angular/core";
export class ArticleService {
http:HttpClient=inject(HttpClient);
articles:Article[]=[];
    // selectarticle:EventEmitter<Article>=new EventEmitter<Article>();
    // onselectarticle(article:Article){
    // this.selectarticle.emit(article);
    // }
    getArticles(){
      this.http.get('https://articles-app-1c166-default-rtdb.firebaseio.com/articles.json').pipe(map((response)=>{
         let artcls=[];
         for(let key in response){
         if(response.hasOwnProperty(key)){
          artcls.push({...response[key],id:key});
         }
        }
        return artcls;
      })).subscribe((res)=>{
        this.articles=res;
       });
    };
    getArticle(id:string){
    return this.articles.find((article)=>{return article.id==id;});
    }
    getAllArticles(){
    return new Observable<Article[]>((observer)=>{
      setTimeout(() => {
        observer.next(this.articles)
      }, 5000);
     });
    }
  
  createArticle(art:Article){
   const article={...art,
    likes:0,
    com:[''],
    expired:false,
   }
    this.http.post('https://articles-app-1c166-default-rtdb.firebaseio.com/articles.json',article).subscribe((res)=>{
    console.log(res);
    this.articles.push(article);
   });
 
  };

  deleteArticle(id:string){
  this.http.delete('https://articles-app-1c166-default-rtdb.firebaseio.com/articles/'+id+'.json').subscribe((data)=>{console.log(data)});
  };
  updateArticle(id:string,newarticle:object){
  this.http.patch('https://articles-app-1c166-default-rtdb.firebaseio.com/articles/'+id+'.json',newarticle).subscribe((data)=>{console.log(data);});
  };
  likeArticle(id:string,like:number){
    console.log(id,like);
    this.http.patch('https://articles-app-1c166-default-rtdb.firebaseio.com/articles/'+id+'.json',{likes:like+1}).subscribe((data)=>{console.log(data);});
  }

    

}