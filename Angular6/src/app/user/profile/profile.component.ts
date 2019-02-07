import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

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
      console.log(res.user);
      this.loggedUser=res.user;
    },(err)=>{
      console.error(err);
    })
  }

}
