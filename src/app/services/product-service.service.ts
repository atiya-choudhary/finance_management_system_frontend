import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  //url:string="http://localhost:3000/posts";
  // url:string="http://localhost:8080/product/getallproduct";
  constructor(private httpclient:HttpClient) { }
  listProduct(){
    console.log(this.httpclient.get(`${baseUrl}/product/getallproduct`));
    return this.httpclient.get(`${baseUrl}/product/getallproduct`);
   }
   getProductById(id:any):Observable<any>{
      return this.httpclient.get(`${baseUrl}/product/getproduct/${id}`);
     }
}
