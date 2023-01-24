import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import Swal from 'sweetalert2';
import { Title, Meta } from '@angular/platform-browser';
import { RecruiteeService } from 'src/app/services/recruitee.service';

@Component({
  selector: 'app-skill-checklist',
  templateUrl: './skill-checklist.component.html',
})
export class SkillChecklistComponent implements OnInit {
  title = 'Case Study';

  constructor(
    public router: Router,
    public service: RecruiteeService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  jobCategory: any = [];

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'keywords',
      content:
        'ICU, Med/Surg, Telemetry, Emergency, Operation, Psych, Correction, LMSW',
    });
    this.metaTagService.updateTag({
      name: 'description',
      content:
        'ICU, Med/Surg, Telemetry, Emergency, Operation, Psych, Correction, LMSW',
    });
  }
}
