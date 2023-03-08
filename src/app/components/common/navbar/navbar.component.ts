import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarItems: any = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'About Us',
      link: '/about-us',
    },
    {
      label: 'Clients & Partners',
      link: '/client-partners',
    },
    {
      label: 'Healthcare Services',
      link: '',
      children: [
        {
          label: 'Our Healthcare Services',
          link: '/healthcare-services',
        },
        {
          label: 'Research',
          link: '/research',
        },
        {
          label: 'FAQ',
          link: '/faq',
        },
        {
          label: 'Skills Checklist',
          link: '/skill-checklist',
        },
      ],
    },
    {
      label: 'Industrial & Commercial Services',
      link: '',
      children: [
        {
          label: 'Industrial & Commercial Services',
          link: '/ia-services',
        },
        {
          label: 'Research',
          link: '/ia-research',
        },
        {
          label: 'FAQ',
          link: '/ia-faq',
        },
        {
          label: 'Blog',
          link: '/ia-blog',
        },
      ],
    },
    {
      label: 'IT Services',
      link: '',
      children: [
        {
          label: 'Our IT Services',
          link: '/it-services',
        },
        {
          label: 'Case Study',
          link: '/case-study',
        },
        // {
        //   label: 'Resources',
        //   link: '/resources',
        // },
        {
          label: 'Blog',
          link: '/it-blog',
        },
      ],
    },
    {
      label: 'Jobs',
      link: '/jobs',
    },
    {
      label: 'Contact Us',
      link: '/contact-us',
    },
  ];

  user_id: any;
  user_name: any;
  moduleArray: any;
  checkUserType: boolean = false;
  navStatus: boolean = false;

  constructor(
    public router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  changeCss() {
    var classname = document.getElementById('navbarNavDropdown').className;
    ////console.log(classname);
    if (
      classname ===
        'header-nav navbar-collapse justify-content-start collapse show' &&
      this.navStatus === false
    ) {
      //document.getElementById('navbarNavDropdown').className = "header-nav navbar-collapse justify-content-start collapse";
      this.navStatus = true;
      setTimeout(() => {
        document.getElementById('navbarNavDropdown').style.display = 'none';
      }, 100);
    } else {
      this.navStatus = false;
      //document.getElementById('navbarNavDropdown').className = "header-nav navbar-collapse justify-content-start collapse";
      document.getElementById('navbarNavDropdown').style.display = 'block';
    }
  }

  hideMenu() {
    this.navStatus = true;
    document.getElementById('navbarNavDropdown').style.display = 'none';
    document.getElementById('menuBtn').className =
      'navbar-toggler collapsed navicon justify-content-end';
  }

  ngOnInit() {
    this.user_id = sessionStorage.getItem('user_id');
    this.user_name = sessionStorage.getItem('user_name');
    this.functionassignAccess();
    if (sessionStorage.getItem('user_type') === 'recruitee') {
      this.checkUserType = true;
    }
  }

  functionassignAccess() {
    if (sessionStorage.getItem('user_id')) {
      const arr = JSON.parse(sessionStorage.getItem('moduleArray'));
      //console.log(arr)
      const ids = arr.map((o) => o.module_id);
      this.moduleArray = arr.filter(
        ({ module_id }, index) => !ids.includes(module_id, index + 1)
      );
      this.moduleArray.forEach((e) => {
        if (e.module_name === 'JOBS') {
          e.module_name_lower = 'Jobs';
          //e.route = "/job-dashboard";
          e.route = '/manage-jobs';
        }
        if (
          e.module_name === 'MY JOBS' &&
          sessionStorage.getItem('user_type') === 'recruitee'
        ) {
          e.module_name_lower = 'My Jobs';
          //e.route = "/myjobs-dashboard";
          e.route = '/job-applications';
        }
        if (e.module_name === 'MY JOBS') {
          e.module_name_lower = 'My Jobs';
          //e.route = "/myjobs-dashboard";
          e.route = '/job-applications';
        }
        if (e.module_name === 'SETUP') {
          e.module_name_lower = 'Setup';
          //e.route = "/setup-dashboard";
          e.route = '/company';
        }
        if (e.module_name === 'APPLICANT') {
          e.module_name_lower = 'Applicants';
          //e.route = "/applicant-dashboard";
          e.route = '/applicants';
        }
        if (e.module_name === 'FINANCE') {
          e.module_name_lower = 'Finance';
          //e.route = "/finance-dashboard";
          e.route = '/payroll-processing';
        }
        if (e.module_name === 'ASSIGNMENT') {
          e.module_name_lower = 'Assignment';
          e.route = '/company';
        }
        if (e.module_name === 'PROFILE') {
          e.module_name_lower = 'Profile';
          e.route = '/company';
        }
      });
      //console.log(arr, this.moduleArray)
    }
  }

  navigateToRecruitee() {
    this.router.navigate(['current-assignment']);
  }

  navigateToProfile() {
    this.router.navigate(['candi-profile']);
  }

  navigateTo(val) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(val.module_id),
      },
    };
    this.router.navigate([val.route], navigationExtras);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
    this.user_id = null;
  }
}
