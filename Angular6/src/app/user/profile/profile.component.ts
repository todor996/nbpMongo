import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser:User;
  constructor(private auth:UserService) { }

  ngOnInit() {
    this.auth.profile().subscribe(res=>{
     
      this.loggedUser=res.user;
      console.log(this.loggedUser);
      
    },(err)=>{
      console.error(err);
    })
  }

}
