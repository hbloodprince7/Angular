import { Component, OnInit } from '@angular/core';
import { MyService } from '../MyService';
@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {
  name !:string;
  constructor(private serv:MyService) { 
    this.name = serv.getName();
  }

  ngOnInit(): void {
  }

}
