import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

userName:string=''
lastName:string=''

constructor(
  public userService:UserService
){}
ngOnInit(): void {
    this.userName=this.userService.userName
    this.lastName=this.userService.lastName
}
}
