import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Gift } from '../../shared/models/gift.model';
import { CommentService } from 'src/app/shared/services/comment.service';
import {Komentar} from '../../shared/models/comment.model';
import { UserService } from 'src/app/shared/services/user.service';
import { BuyrateComponent } from '../buyrate/buyrate.component';
import { Rating } from 'src/app/shared/models/rating.model';
import { RatingService } from 'src/app/shared/services/rating.service';
@Component({
  selector: 'app-gift-dialog',
  templateUrl: './gift-dialog.component.html',
  styleUrls: ['./gift-dialog.component.css']
})
export class GiftDialogComponent implements OnInit  {
  comment:String='';
  comments:Komentar[]=[];
  komentar:Komentar;
  
  avgRating:number;
  constructor(
    public dialogRef: MatDialogRef<GiftDialogComponent>,
    private CommentService:CommentService,
    private auth:UserService,
    private rateService:RatingService,
        @Inject(MAT_DIALOG_DATA) public data:Gift,public dialog:MatDialog) {
     
    }
    ngOnInit(){
      console.log(this.data);
      this.komentar={
        
        
        comment:'',
        gift:this.data._id,
        user:this.auth.userId,
        dateAdded:new Date()
    
        }
      this.CommentService.getAllComments(this.data).subscribe(res=>this.comments=res);
      this.rateService.getAllRatings(this.data).subscribe(res=>{
        console.log(res);
        let ratings:number[]=res.map(a=>a.rating);
        console.log(ratings);
        let sum=ratings.reduce((a,b)=>a+b,0);
        this.avgRating=sum/ratings.length;


        
      });
    }
    postComment(){
      console.log(this.komentar);
      this.CommentService.addComment(this.komentar).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
      });
    }
    Buy(gift:Gift){
     
    const dialogRef=this.dialog.open(BuyrateComponent,{data:{giftId:this.data._id,userId:this.auth.userId}});
    dialogRef.afterClosed().subscribe(()=>this.ngOnInit());
    }

}
