import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
user:any;
username:string='';
lastName:string='';

constructor(
  private userService:UserService

){}
ngOnInit(): void {
   this.username=this.userService.userName
   this.lastName=this.userService.lastName
   this.getUsers();
}

getUsers(){
this.userService.getUsers()
.subscribe(res=>{
  console.log(res);
  this.user=res;
})
}


}
