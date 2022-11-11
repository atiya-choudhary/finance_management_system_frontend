import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email:'',
    phone:'',
    address:'',
  };

  ngOnInit(): void {
  }
  formSubmit(){
console.log(this.user);
if(this.user.username==''||this.user.username==null){
 // alert("user is required");
 this.snack.open("Username must required...!",'',{duration:3000
,verticalPosition:'top',horizontalPosition:'center'});
  return;
}

//adduser:userservice
this.userService.addUser(this.user).subscribe(
  (data)=>{
//success 
console.log(data);
//alert('sucess');
Swal.fire('Success','User is Register','success');
  },
  (error)=>{
console.log(error);
//alert('somthing went wrong');
this.snack.open("Somthing wents worong..!",'',{duration:3000
  ,verticalPosition:'top',horizontalPosition:'center'});
  }
)
  }

}
