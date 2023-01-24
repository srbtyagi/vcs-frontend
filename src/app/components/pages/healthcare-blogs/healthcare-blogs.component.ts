import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-healthcare-blogs',
  templateUrl: './healthcare-blogs.component.html',
})
export class HealthcareBlogsComponent implements OnInit {
  title = ' Blog';

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'keywords',
      content:
        'Nursing Pay, Nursing Crisis, Nursing Patient Ratio, high pay nursing jobs',
    });
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Education over patient ratio, nursing pay',
    });
  }
}
