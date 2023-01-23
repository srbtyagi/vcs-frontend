import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {
  title = 'About Us';

  constructor(
    public http: AdminService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'keywords',
      content: 'Registered Nurse, RN, LPN, Nurse, Lab Technologist, LMSW',
    });
    this.metaTagService.updateTag({
      name: 'description',
      content:
        'We provide healthcare staff like Registered Nurse, LPN, Lab Technologist, LMSW, IT Engineer, Software dev',
    });
  }
}
