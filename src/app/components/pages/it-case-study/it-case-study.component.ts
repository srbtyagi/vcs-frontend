import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-it-case-study',
  templateUrl: './it-case-study.component.html',
})
export class ITCaseStudyComponent implements OnInit {
  title = 'Research';

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'keywords',
      content: 'Cyber Security, AI, Big data, BlockChain, Java, .Net',
    });
    this.metaTagService.updateTag({
      name: 'description',
      content:
        'IT case studies put light on  improvements on existing solutions',
    });
  }
}
