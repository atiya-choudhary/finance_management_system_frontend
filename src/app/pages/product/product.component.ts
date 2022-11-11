import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-product1',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private productService:ProductServiceService) {}
  id:any;
  items:any={
    productId:'',
    productName:'',
    productDetails:'',
    productPrice:''
  }
  totalPrice:any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getProduct(this.id);
  }
  
  emiOptions:any=[
    {month:3,values:"3 Months"},
    {month:6,values:"6 Months"},
    {month:9,values:"9 Months"},
    {month:12,values:"12 Months"}
  ];
  selected:any;
  e:any={months:'',values:''}
  calculateEmi(e:any){
    console.log(e.target.value[0]);
    this.selected=parseInt(e.target.value[0]);

  }
  getProduct(id:any){
    this.productService.getProductById(id).subscribe((response:any)=>{this.items=response;
    console.log(this.items);localStorage.setItem('totalprice',this.items.productPrice);
    localStorage.setItem('product',JSON.stringify(this.items))});
    
  }

  getProducts(){
    this.getProduct(this.id);
    console.log('hi');
  }

  

}
