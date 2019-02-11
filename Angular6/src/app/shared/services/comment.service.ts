import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Komentar } from '../models/comment.model';

import {map} from 'rxjs/operators';
import { DateAdapter } from '@angular/material';
import { Gift } from '../models/gift.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  addComment(comment:Komentar){
    let URI="http://localhost:3000/api/comment";
    return this.http.post(URI,comment);

  }
  getAllComments(gift:Gift):Observable<any>{
    let URI=`http://localhost:3000/api/comments/${gift._id}`;
    return this.http.get(URI);
  }
}
