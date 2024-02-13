import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IDeactivateComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements IDeactivateComponent {
firstname:string='';
lastname:string='';
password:string='';
email:string='';
isSubmited:boolean=false;

register(){
this.isSubmited=true;
console.log(this.email);
}
canExit(){
  if(this.firstname||this.lastname||this.password||this.email && !this.isSubmited){
    return  confirm("You have unsave data do you want to exit??");
   }else{
    return true;
   }
}

}
