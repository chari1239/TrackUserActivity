import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

   users:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('/user').subscribe(data => {
      this.users = data;
    });
  }
}
