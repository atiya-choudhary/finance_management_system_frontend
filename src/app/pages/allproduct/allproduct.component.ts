import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
   this.listProducts()
  }
  items:any=[];
  listProducts(){
    this.productService.listProduct().subscribe((response)=>{this.items=response});
  }
}
