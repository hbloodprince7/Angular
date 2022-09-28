import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { image } from '../image';
@Component({
  selector: 'for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
  heroes = ['Rajkumar', 'Vishnuvardhan', 'Ambareesh', 'Puneeth'];
  constructor() { }

  data = [new hero(1, "Anthony Stark"),
          new hero(2, "Peter Parker"),
          new hero(3, "Matt Murdock")];
  
  i = new image();


  ngOnInit(): void {
  }

}
