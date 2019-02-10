import { Component, OnInit } from '@angular/core';
import { GiftService } from 'src/app/shared/services/gift.service';
import { Gift } from 'src/app/shared/gift.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {
  public newGift:Gift;
  constructor(private giftService:GiftService,  public dialogRef: MatDialogRef<AddGiftComponent>,) { }

  ngOnInit() {
    this.newGift={
      name:'',
      price:0,
      description:'',
      inStock:false,
      discount:0,
      category:'',
      dateAdded:null,
      imgurl:'/src/assets/gift2.png'
    }
  }
  onSubmit(){
    this.giftService.addGift(this.newGift).subscribe(res=>{
    console.log(res);
    })
  }
  
}
