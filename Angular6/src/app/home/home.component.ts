import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {Gift} from '../shared/gift.model';
import { MatDialog } from '@angular/material';
import { GiftDialogComponent } from '../gift-dialog/gift-dialog.component';
import { User } from '../shared/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  gifts:Gift[]=[];
  poklon:Gift={
    name:"Auto",
    category:"Kola",
    price:250,
    imgUrl:"/assets/gift1.png",
    comments:["asdf","pdf"]
  };
  poklon2:Gift={
    name:"Autoq",
    category:"Kolaw",
    price: 111,
    imgUrl:"/assets/gift2.png",
    comments:["lol","123"]
  };
  constructor(private auth:UserService,public dialog:MatDialog) { }

  ngOnInit() {
    if(this.auth.isLoggedIn())
    {
      this.gifts.push(this.poklon);
      this.gifts.push(this.poklon2);
      this.gifts.push(this.poklon);
      this.gifts.push(this.poklon2);
      this.gifts.push(this.poklon);
      this.gifts.push(this.poklon2);
      this.gifts.push(this.poklon);
      this.gifts.push(this.poklon2);
    }
  }
  isAdmin(){
    
  }
  openDialog():void{
    const dialogRef=this.dialog.open(GiftDialogComponent,{data:this.poklon});
  }
}
