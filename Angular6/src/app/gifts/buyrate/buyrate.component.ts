import { Component, OnInit,Inject } from '@angular/core';
import { GiftService } from 'src/app/shared/services/gift.service';
import { Gift } from 'src/app/shared/models/gift.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Rating } from 'src/app/shared/models/rating.model';
import { RatingService } from 'src/app/shared/services/rating.service';
import {MatSnackBar} from '@angular/material';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-buyrate',
  templateUrl: './buyrate.component.html',
  styleUrls: ['./buyrate.component.css']
})
export class BuyrateComponent implements OnInit {
  rate:Number[];
  number:Number;
  rating:Rating;
  constructor(private auth:UserService,public dialogRef: MatDialogRef<BuyrateComponent>,private snackbar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data:any,private rateService:RatingService) {this.rate=[1,2,3,4,5,6,7,8,9,10]; }

  ngOnInit() {
    console.log(this.data);
  }
  onSubmit(number:Number){
    console.log(this.data);
    this.rating={
      gift:this.data.giftId,
      user:this.data.userId,
      rating:this.number
      }
    console.log(this.rating);
    this.rateService.addRating(this.rating).subscribe(res=>{
      if(!res['success'])
      this.openSnackbar();
      this.auth.userGifts({id:this.data.userId,giftId:this.data.giftId}).subscribe(p=>{
        console.log(p);
      })
    });
  }
  openSnackbar(){
    this.snackbar.open("Already rated",null,{duration:2000});
  }
}
