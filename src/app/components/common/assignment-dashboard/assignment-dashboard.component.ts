import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-dashboard',
  templateUrl: './assignment-dashboard.component.html',
  styleUrls: ['./assignment-dashboard.component.scss'],
})
export class AssignmentDashboardComponent implements OnInit {
  checkUserType: boolean = false;
  constructor() {}

  ngOnInit() {
    if (sessionStorage.getItem('user_type') === 'recruitee') {
      this.checkUserType = true;
    }
  }
}
