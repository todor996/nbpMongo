import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import {Gift} from '../shared/gift.model';
import { MatDialog } from '@angular/material';
import { GiftDialogComponent } from '../gifts/gift-dialog/gift-dialog.component';
import { User } from '../shared/user.model';
import { GiftService } from '../shared/services/gift.service';
import { AddGiftComponent } from '../gifts/add-gift/add-gift.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date=new Date();
  categories:String[]=[];
  gifts:Gift[]=[];
 

  constructor(private auth:UserService,public dialog:MatDialog,private giftService:GiftService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn())
    {
      this.giftService.getAllGifts().subscribe(res=>{
        this.gifts=res
        
      });

      
    }
  }
  isAdmin(){

  }
  openDialog(gift:Gift):void{
    const dialogRef=this.dialog.open(GiftDialogComponent,{data:gift});
  }
  Add():void{
    const dialogRef2=this.dialog.open(AddGiftComponent);
  }
  Remove(gift:Gift):void{
    this.giftService.removeGift(gift).subscribe(res=>{console.log(res)
    this.ngOnInit();
    });
    
  }
}
