import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  componentName:string="header"; 
constructor(){}

ngOnInit(): void {
    this.setTtitle();
}

  setTtitle(){
    this.componentName='header';
  }

}
