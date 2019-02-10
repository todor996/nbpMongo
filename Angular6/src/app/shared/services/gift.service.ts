import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Gift } from '../gift.model';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http:HttpClient) { };
  private url="http://localhost:3000/api";
  public getAllGifts():Observable<any>{
    let URI=`${this.url}/gifts`;
    return this.http.get(URI);
    

  }
  public addGift(gift:Gift){
    let URI=`${this.url}/gift`;
    
    return this.http.post(URI,gift);

  }
  public removeGift(gift:Gift){
    let URI=`${this.url}/gift/${gift._id}`;
    return this.http.delete(URI);
  }
}
 