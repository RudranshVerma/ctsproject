import { Component } from '@angular/core';

@Component({
  selector: 'app-listofanime',
  templateUrl: './listofanime.component.html',
  styleUrls: ['./listofanime.component.css']
})
export class ListofanimeComponent {

  animes=[
    {
    id:1,
    name:'One Piece'
  },{
    id:2,
    name:'Solo Leveling'
  }
]
}

