import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { UserDetails } from '../UserDetails';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userdetails !: UserDetails[] ;
  constructor(private userdetailservice:UserDetailsService) { }

  ngOnInit(): void {
    this.userdetailservice.getUserDetails()
    .subscribe(data => this.userdetails = data)
  }

}
