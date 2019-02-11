import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { GiftService } from 'src/app/shared/services/gift.service';
import { Gift } from 'src/app/shared/models/gift.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser:User;
  gifts:Gift[];
  constructor(private auth:UserService,private gift:GiftService) { }

  ngOnInit() {
    
      
    this.auth.profile().subscribe(res=>{
     
      this.loggedUser=res.user;
      this.gift.getAllGifts().subscribe(p=>console.log(this.gifts=p.filter(el=>this.loggedUser.gifts.includes(el._id))));
      
    },(err)=>{
      console.error(err);
    })
  }

}
