import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanDeactivate, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { ArticleService } from "./article.service";
import { Article } from "../Models/Article";
export interface IDeactivateComponent{
canExit:()=>boolean|Observable<boolean>|Promise<boolean>;
}
//in older version of angular we use this approach to implement rout guard but in new versin all we have to do 
//is simply create a fun and pass as arugment in rout for property canActivate.
export class AuthGuardService implements CanActivate,CanActivateChild,CanDeactivate<IDeactivateComponent>,Resolve<Article[]>{
authService:AuthService=inject(AuthService);
articleService:ArticleService=inject(ArticleService);
router:Router=inject(Router);
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authService.isAuthenticated()){
     return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    } 
    };
    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean|Observable<boolean> |Promise<boolean>{
       return this.canActivate(route,state);
  };
  canDeactivate(com:IDeactivateComponent,cr:ActivatedRouteSnapshot,crst:RouterStateSnapshot,nst:RouterStateSnapshot){
   return com.canExit();
  
  };
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article[] | Observable<Article[]> | Promise<Article[]> { 
return this.articleService.getAllArticles();
};

}