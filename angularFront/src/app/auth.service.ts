import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}


@Injectable()
export class AuthService {
  private token:string;
  constructor(private http:HttpClient,private router:Router) { }

  private saveToken(token:string): void{
   localStorage.setItem('auth-token',token);
   this.token=token;
  }
  private getToken():string{
    if (!this.token)
      this.token=localStorage.getItem('auth-token');
    return this.token;
  }
  public logOut():void{
    this.token='';
    window.localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/');
  }
  public getUserDetails():UserDetails{
    const token=this.getToken();
    let payload;
    if(token){
      payload=token.split('.')[1];//jwt body
      payload=window.atob(payload);//decode base64 string
      return JSON.parse(payload);
    }
    else return null;
  }
  public isLoggedIn(): boolean{
    const user=this.getUserDetails();
    if(user){
      return user.exp>Date.now()/1000;
    }
    else return false;
  }
  private request(method:'post'|'get', type:'login'|'register'|'profile',user?:TokenPayload):Observable<any>{
    let base;
    
    if(method=='post'){
      base=this.http.post(`http://localhost:3000/api/${type}`,user);
    }
    else{
      base=this.http.get(`http://localhost:3000/api/${type}`,{ headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request=base.pipe(map((data:TokenResponse)=>{
      if(data.token){
        this.saveToken(data.token);
      }
      return data;
    })
    );
    return request;
  }

  public register(user:TokenPayload):Observable<any>{
    return this.request('post','register',user);
  }
  public login(user:TokenPayload):Observable<any>{
    return this.request('post','login',user);
  }
  public profile():Observable<any>{
    return this.request('get','profile');
  }
}

