import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpclient:HttpClient) { }
  public addCard(card:any):Observable<any>{
    return this.httpclient.post(`${baseUrl}/card/createcard`,card);
      }
}
