import { inject } from "@angular/core";
import { UserService } from "./user.service";

export class AuthService{
isLoged:boolean=false;
userservice:UserService=inject(UserService);
login(email:string,password:string){

const user=this.userservice.users.find((user)=>{
return user.email===email && user.password===password;});
if(user ===undefined){
    this.isLoged=false
    }else{
    this.isLoged=true;
    }
    return user;
}
logout(){
this.isLoged=false;
}
isAuthenticated(){
return this.isLoged;
}
}