import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Title, Meta } from '@angular/platform-browser';
import { RecruiteeService } from 'src/app/services/recruitee.service';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  allJobs: any = [];
  search1: any = '';
  search2: any = '';
  search3: any = '';

  constructor(private _jobsService: JobsService) {}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs() {
    this.allJobs = [];
    let jobsObj = {
      s1: this.search1,
      s2: this.search2,
      s3: this.search3,
    };

    this._jobsService.fetchJobs(jobsObj).subscribe({
      next: (res: any) => {
        this.allJobs = res;
      },
      error: (error: any) => {
        console.log('Error getting jobs: ', error.message);
      },
    });
  }
}
