import { Component } from '@angular/core';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent {

  register(){
    console.log("soccer ball register");
  }

}
