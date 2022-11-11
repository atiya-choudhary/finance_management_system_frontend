import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardService } from 'src/app/services/card.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  totalprice:any;
  product:any={
    productId:'',
    productName:'',
    productDetails:'',
    productPrice:''
  }
  constructor(private cardService:CardService, private snack:MatSnackBar) { }

  public card={
    card_no:'',
    card_name:'',
    card_type:'',
    cvv:''
  }
  
  ngOnInit(): void {
    this.totalprice=localStorage.getItem('totalprice');
    let product=localStorage.getItem('product');
    this.product=JSON.parse(product!);
    console.log(this.totalprice);
    console.log(this.product);
    
    
  }
  formSubmit(){
    
console.log(this.card);
if(this.card.card_no==''||this.card.card_no==null){
 // alert("user is required");
 this.snack.open("card number must required...!",'',{duration:3000
,verticalPosition:'top',horizontalPosition:'center'});
  return;
}
// this.snack.open("Payment Done",'',{duration:3000
//   ,verticalPosition:'top',horizontalPosition:'center'});
//adduser:userservice
// Swal.fire('Success','Payment Done','success');
this.cardService.addCard(this.card).subscribe(
  (data: any)=>{
//success 
console.log(data);
//alert('sucess');
Swal.fire('Success','Payment Done','success');
  },
  (error: any)=>{
console.log(error);
//alert('somthing went wrong');
this.snack.open("Somthing wents worong..!",'',{duration:3000
  ,verticalPosition:'top',horizontalPosition:'center'});
  }
)
  }

}
