import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
  name = 'SONATA';
  day = new Date();
  price = 500;
  arr = [1, 4, 5, 7, 8];
  str = ['s','t','a','r','k'];

  constructor() { }

  ngOnInit(): void {}
}
