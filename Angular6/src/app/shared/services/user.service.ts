import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
interface TokenResponse {
  token: string;
  admin:boolean;
  id:string;
}

export interface TokenPayload {
  email: string;
  password: string;
  fullName?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    admin:false,
    _id:''
  };
  admin:boolean;
  userId:string;
  constructor(private http: HttpClient,private router:Router) { }
  private token:string;
  private saveToken(token:string):void{
    localStorage.setItem('meanGifts-token',token);
    this.token=token;
  }
  private getToken():string{
    if(!this.token)
      this.token=localStorage.getItem('meanGifts-token');
    return this.token;
  }
  public getUserInfo():User{
    const token=this.getToken();
    let payload;
    if(token) {
      payload=token.split('.')[1];
      payload=window.atob(payload);
      return JSON.parse(payload);
    }
    else return null;
  }
  public isLoggedIn():boolean{
    const user=this.getUserInfo();
    if(user)
      return user.exp>Date.now()/1000;
    else return false;
  }
  public isAdmin():boolean{
   return this.admin;
  }
  private request(method: 'post'|'get', type: 'authenticate'|'register'|'userProfile'|'userGifts', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`http://localhost:3000/api/${type}`, user);
    } else {
      base = this.http.get(`http://localhost:3000/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }
  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);

  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'authenticate', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'userProfile');
  }
  public userGifts(obj:Object):Observable<any>{
    console.log(obj);
    return this.http.put('http://localhost:3000/api/userGifts',{id:obj['id'],giftId:obj['giftId']});
  }
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('meanGifts-token');
    this.router.navigateByUrl('/');
  }
}
