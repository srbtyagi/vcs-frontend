import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-it-service',
  templateUrl: './it-service.component.html',
})
export class ITServiceComponent implements OnInit {
  title = 'Industrial & Admin Services';

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'keywords',
      content: 'Developer, Software, Analyst, Architect, Database jobs',
    });
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Industrial & Admin Services',
    });
  }
}
