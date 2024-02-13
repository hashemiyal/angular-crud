import { Routes } from '@angular/router';
import {ArticlesComponent} from './articles/articles.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfountComponent } from './notfount/notfount.component';
import { ConfirmDelComponent } from './confirm-del/confirm-del.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { AuthGuardService } from './Services/authguard.service';
import{canActivate,canActivateChild,canDeactivate,resolve} from './Services/auth.guard';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
export const routes: Routes = [
{path:'',redirectTo:'articles',pathMatch:'full'},
{path:'articles',component:ArticlesComponent,resolve:{articles:resolve},canActivate:[canActivate]},
//  when we want to define the child for a path like articles
// {path:'articles',canActivateChild:[canActivateChild],children:[
// {path:'articles/:id',component:ArticleDetailsComponent},
// {path:'article/:id',component:ConfirmDelComponent}
// ]},
{path:'articles/:id',component:ArticleDetailsComponent},
{path:'articles/delete/:id',component:ConfirmDelComponent},
{path:'articles/edit/:id',component:EditArticleComponent},
{path:'article/create',component:CreateArticleComponent,canActivate:[canActivate]},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent,canDeactivate:[canDeactivate]},
{path:'**',component:NotfountComponent}
];
// we can pass data through a rout by data property