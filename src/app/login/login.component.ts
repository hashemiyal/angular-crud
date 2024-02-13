import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
email:string='';
@ViewChild('password') password:ElementRef;
constructor(private authService:AuthService){};
activeRoute:ActivatedRoute=inject(ActivatedRoute);
router:Router=inject(Router);
loginuser(){
let loggedinuser=this.authService.login(this.email,this.password.nativeElement.value);
if(loggedinuser===undefined)
{alert("sorry your cridentail is not corret!!")
}
else{
alert("wellcome :"+loggedinuser.name+":your are logged in!!");
this.router.navigateByUrl('/articles');
}
};
ngOnInit(){
this.activeRoute.queryParams.subscribe(data=>{
const logout=Boolean(data['logout']);
if(logout){
  this.authService.logout();
  alert("your are logged out!");
  this.router.navigateByUrl('/login');
}
});
}
}
