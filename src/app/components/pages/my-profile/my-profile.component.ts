import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
})
export class MyProfileComponent implements OnInit {
  checkUserType: boolean = false;
  constructor() {}

  ngOnInit() {
    if (sessionStorage.getItem('user_type') === 'recruitee') {
      this.checkUserType = true;
    }
  }
}
