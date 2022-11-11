import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginStatusSubject: any;


  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginData={
    username:'',
    password:'',
  }

  formSubmit(){
    if(this.loginData.username.trim()=='' || 
    this.loginData.username==null)
    {
      this.snack.open("UserName Required..!",'',{duration:3000
        ,verticalPosition:'bottom',horizontalPosition:'center'});
        return;
    }

    if(this.loginData.password.trim()=='' || 
    this.loginData.password==null)
    {
      this.snack.open("password is Required..!",'',{duration:3000
        ,verticalPosition:'bottom',horizontalPosition:'center'});
        return;
    }

    //request to sever to genrate token
this.login.generateToken(this.loginData).subscribe((data:any)=>{
  console.log("successfully token generate");
  console.log(data);
  //login
  this.login.loginUser(data.token);
  this.login.getCurrentUser().subscribe(
    (user:any)=>{
      this.login.setUser(user);
      console.log(user);
      //redirect ...Admin admin dashboard
      //redirect ...Noraml normal dashboard
      if(this.login.getUserRole()=="ADMIN")
      {
     //   window.location.href='/admin';
        this.router.navigate(['admin']);
     //   this.loginStatusSubject.next(true);
      }else if(this.login.getUserRole()=='NORMAL'){

       // window.location.href='/user-dashboard';
        this.router.navigate(['user-dashboard']);
      //  this.loginStatusSubject.next(true);
    }else{
this.login.logout();
    }
});
},
(error)=>{
  this.snack.open("Error..!",'',{duration:3000
    ,verticalPosition:'bottom',horizontalPosition:'center'});
    return;
}
);
  }
  

}
