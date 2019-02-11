import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rating } from '../models/rating.model';
import { Gift } from '../models/gift.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }
  addRating(rating:Rating){
    let URI="http://localhost:3000/api/rating";
    return this.http.post(URI,rating);

  }
  getAllRatings(gift:Gift):Observable<any>{
    let URI=`http://localhost:3000/api/rating/${gift._id}`;
    return this.http.get(URI);
  }
}
