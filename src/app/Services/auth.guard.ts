import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Component, inject } from "@angular/core";
import { RegisterComponent } from "../register/register.component";
import { ArticleService } from "./article.service";
//new method for new version of angular to implement rout guard
 export const canActivate=()=>{
    let authService=inject(AuthService);
    let router=inject(Router);
    if(authService.isAuthenticated()){
        return true;
       }else{
         router.navigateByUrl('/login');
         return false;
       } 
}

export const canActivateChild=()=>{
 return canActivate();
}
//new mthod for implementing the candeactivate method for preventing leaving from a route
export const canDeactivate=(com:RegisterComponent)=>{
 return com.canExit();
}

export const resolve=()=>{
let articleService=inject(ArticleService);
return articleService.getAllArticles();
}