import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ArticleService } from './Services/article.service';
import {UserService} from './../app/Services/user.service'
import {AuthService} from './../app/Services/auth.service'
import { AuthGuardService } from './Services/authguard.service';
import { FilterService } from './Services/filter.service';
import { HttpClientModule } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
providers: [provideRouter(routes),ArticleService,UserService,AuthService,AuthGuardService,FilterService,importProvidersFrom(HttpClientModule)]
};
