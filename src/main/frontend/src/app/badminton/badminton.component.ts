import { Component } from '@angular/core';

@Component({
  selector: 'app-badminton',
  templateUrl: './badminton.component.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonComponent {

  register(){
    console.log("badminton register");
  }
}
