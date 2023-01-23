import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import * as moment from 'moment';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  filteredCity: any = [];
  postJobForm: UntypedFormGroup;
  blended_pay: any;
  regular_pay: any;
  moduleArray: any[];
  jobType: any = [];
  positiontype: any = [];
  jobSector: any = [];
  clientList: any = [];
  systemList: any = [];
  shit_details: any = ['Day'];
  ot_holiday_pay_rate_traveller: any;
  ot_holiday_pay_rate_local: any;
  states: any = [];
  stateList: boolean = false;
  filterArrayState: any = [];
  cityList: boolean = false;
  filterArrayCity: any = [];

  constructor(
    public fb: UntypedFormBuilder,
    public http: AdminService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    ////console.log(State.getStatesOfCountry("US"));
    ////console.log(City.getCitiesOfState("US", "AL"));
  }

  ngOnInit() {
    this.route.queryParams.subscribe((r: any) => {
      var data = JSON.parse(r.special);
      this.getAssignaccess(data);
    });

    /** spinner starts on init */
    this.http.spinnerShow();
    setTimeout(() => {
      this.http.spinnerHide();
    }, 900);
    this.states = State.getStatesOfCountry('US');
    this.filterArrayState = State.getStatesOfCountry('US');
    this.getJobType();
    this.getPositionType();
    this.getAlljobSector();
    this.getAllClients();
    this.getAllSystemNames();
    ///// Restrict copy and paste negative value
    var myInput: any = document.getElementById('billRate');
    var myInput2: any = document.getElementById('OTRate');
    myInput.addEventListener(
      'paste',
      function (e) {
        var pasteData = e.clipboardData.getData('text/plain');
        if (pasteData.match(/[^0-9]/)) e.preventDefault();
      },
      false
    );

    myInput2.addEventListener(
      'paste',
      function (e) {
        var pasteData = e.clipboardData.getData('text/plain');
        if (pasteData.match(/[^0-9]/)) e.preventDefault();
      },
      false
    );

    this.postJobForm = this.fb.group({
      job_id: new UntypedFormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      state: new UntypedFormControl(null, [Validators.required]),
      city: new UntypedFormControl(null, [Validators.required]),
      job_title: new UntypedFormControl(null, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      job_desc: new UntypedFormControl(null, [
        Validators.required,
        Validators.maxLength(1000),
      ]),
      bill_rate: new UntypedFormControl(null, [
        Validators.required,
        Validators.max(999999999999999999999999999999),
      ]),
      blended_pay_rate: new UntypedFormControl(null, [Validators.required]),
      ot_holiday_rate: new UntypedFormControl(null, [
        Validators.required,
        Validators.max(999999999999999999999999999999),
      ]),
      regular_pay_rate: new UntypedFormControl(null, [Validators.required]),
      ot_holiday_pay_rate_traveller: new UntypedFormControl(null, [
        Validators.required,
      ]),
      ot_holiday_pay_rate_local: new UntypedFormControl(null, [
        Validators.required,
      ]),
      position: new UntypedFormControl(null, [Validators.required]),
      job_type: new UntypedFormControl(null),
      job_sector: new UntypedFormControl(null, [Validators.required]),
      system_name: new UntypedFormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      client_name: new UntypedFormControl(null, [Validators.required]),
      req_inf: new UntypedFormControl(null, Validators.maxLength(1000)),
      job_duration: new UntypedFormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      confirmed_hr: new UntypedFormControl(null, [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  getAssignaccess(val) {
    if (sessionStorage.getItem('user_id')) {
      this.moduleArray = [];
      const arr = JSON.parse(sessionStorage.getItem('moduleArray'));
      //console.log(arr)
      const ids = arr.map((o) => o.submodule_id);
      const arry = arr.filter(
        ({ submodule_id }, index) => !ids.includes(submodule_id, index + 1)
      );
      arry.forEach((e, index) => {
        if (e.module_id === val) {
          this.moduleArray.push(e);
          switch (e.submodule_name) {
            case 'POST JOB': {
              e.submodule_name_lower = 'Post A Job';
              e.routing = '/post-jobs';
              break;
            }
            case 'MANAGE JOB': {
              e.submodule_name_lower = 'Manage Jobs';
              e.routing = '/manage-jobs';
              break;
            }

            default: {
              //statements;
              break;
            }
          }
        }
      });
    }
    //console.log(this.moduleArray)
    setTimeout(() => {
      document.getElementById('clsActive102').className = 'active';
    }, 200);
  }

  getJobType() {
    this.jobType = [];
    this.http.getAlljobType().subscribe((res: any) => {
      res.forEach((e) => {
        if (e.job_type_status === 'active') {
          this.jobType.push(e);
        }
      });
      ////console.log(this.jobType)
    });
  }

  getPositionType() {
    this.positiontype = [];
    this.http.getAllPositionType().subscribe((res: any) => {
      res.forEach((e) => {
        if (e.position_type_status === 'active') {
          this.positiontype.push(e);
        }
      });
      ////console.log(this.positiontype)
    });
  }

  getAlljobSector() {
    this.jobSector = [];
    this.http.getAlljobSector().subscribe((res: any) => {
      res.forEach((e) => {
        if (e.job_sector_status === 'active') {
          this.jobSector.push(e);
        }
      });
      ////console.log(this.jobSector)
    });
  }

  getAllClients() {
    this.clientList = [];
    this.http.getClients().subscribe((res: any) => {
      this.clientList = res;
      ////console.log(this.clientList)
    });
  }

  getAllSystemNames() {
    this.systemList = [];
    this.http.getSystems().subscribe((res: any) => {
      this.systemList = res;
      ////console.log(this.systemList)
    });
  }

  verifyJobId() {
    this.http.verifyJobId(this.postJobForm.controls['job_id'].value).subscribe(
      (res: any) => {
        if (res === 'already exists') {
          this.errMsg('This job ID already exists.');
        } else if (res === 'not exists') {
        }
      },
      (err) => {
        this.errMsg('Something went wrong,please try again.');
      }
    );
  }

  onOptionsSelected(value: any, name) {
    //console.log(value, name);
    this.filteredCity = [];
    this.filterArrayCity = [];
    this.filteredCity = City.getCitiesOfState('US', value);
    this.filterArrayCity = City.getCitiesOfState('US', value);
    this.postJobForm.controls['state'].setValue(name);
    this.stateList = false;
    //console.log(this.filteredCity)
    // for (var key in this.cities) {
    //   if (this.cities.hasOwnProperty(key)) {
    //     ////console.log(key);
    //     if (key.toLowerCase() === value.toLowerCase()) {
    //       this.filteredCity = this.cities[key];
    //     }
    //   }
    // }
  }

  onOptionsSelectedCity(value: any) {
    //console.log(value);
    this.postJobForm.controls['city'].setValue(value);
    this.cityList = false;
  }

  focusInputCity() {
    this.cityList = true;
  }

  focusInputState() {
    this.stateList = true;
  }

  searchState(ev) {
    //console.log(this.postJobForm.controls.state.value)
    let search_data = this.postJobForm.controls['state'].value;
    this.states = search_data
      ? this.filterListState(search_data)
      : this.filterArrayState;
  }

  filterListState(filterby) {
    filterby = filterby.toLocaleLowerCase();
    return this.filterArrayState.filter(
      (list: any) =>
        list.name.toLocaleLowerCase().indexOf(filterby) !== -1 ||
        list.isoCode.toLocaleLowerCase().indexOf(filterby) !== -1
    );
  }

  searchCity(ev) {
    //console.log(this.postJobForm.controls.city.value)
    let search_data = this.postJobForm.controls['city'].value;
    this.filteredCity = search_data
      ? this.filterListCity(search_data)
      : this.filterArrayCity;
  }

  filterListCity(filterby) {
    filterby = filterby.toLocaleLowerCase();
    return this.filterArrayCity.filter(
      (list: any) => list.name.toLocaleLowerCase().indexOf(filterby) !== -1
    );
  }

  changepayRate(e) {
    //console.log(this.postJobForm.controls.bill_rate.value)
    this.blended_pay = (
      Number(this.postJobForm.controls['bill_rate'].value) / 1.28
    ).toFixed(2);
    this.regular_pay = (
      Number(this.postJobForm.controls['bill_rate'].value) / 1.37
    ).toFixed(2);
    var t = e.target.value;
    e.target.value =
      t.indexOf('.') >= 0
        ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 3)
        : t;

    ///// Restrict negative by typing

    var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
    function keyAllowed() {
      var keys = [
        8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 91, 92, 93,
      ];
      if (key && keys.indexOf(key) === -1) return false;
      else return true;
    }
    if (!keyAllowed()) e.preventDefault();
  }

  changeOTRate(e) {
    this.ot_holiday_pay_rate_traveller = (
      Number(this.postJobForm.controls['ot_holiday_rate'].value) / 1.28
    ).toFixed(2);
    this.ot_holiday_pay_rate_local = (
      Number(this.postJobForm.controls['ot_holiday_rate'].value) / 1.37
    ).toFixed(2);
    var t = e.target.value;
    e.target.value =
      t.indexOf('.') >= 0
        ? t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 3)
        : t;

    ///// Restrict negative by typing

    var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
    function keyAllowed() {
      var keys = [
        8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 91, 92, 93,
      ];
      if (key && keys.indexOf(key) === -1) return false;
      else return true;
    }
    if (!keyAllowed()) e.preventDefault();
  }

  checkBoxSelect(value) {
    let index = this.shit_details.indexOf(value);
    if (index > -1) {
      this.shit_details.splice(index, 1);
    } else {
      this.shit_details.push(value);
    }
    //console.log(this.shit_details)
  }

  submit() {
    this.http.spinnerShow();
    let date = new Date();
    let strTime = date.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    });
    let data = {
      position_type: this.postJobForm.controls['position'].value,
      client_id: this.postJobForm.controls['client_name'].value,
      job_no: this.postJobForm.controls['job_id'].value,
      job_title: this.postJobForm.controls['job_title'].value,
      job_type: this.postJobForm.controls['job_type'].value,
      country: 'USA',
      state: this.postJobForm.controls['state'].value,
      city: this.postJobForm.controls['city'].value,
      bill_rate: this.postJobForm.controls['bill_rate'].value,
      blended_pay_rate: this.postJobForm.controls['blended_pay_rate'].value,
      at_holiday_rate: this.postJobForm.controls['ot_holiday_rate'].value,
      regular_pay_rate: this.postJobForm.controls['regular_pay_rate'].value,
      ot_holiday_pay_rate_traveller:
        this.postJobForm.controls['ot_holiday_pay_rate_traveller'].value,
      ot_holiday_pay_rate_local:
        this.postJobForm.controls['ot_holiday_pay_rate_local'].value,
      job_description: this.postJobForm.controls['job_desc'].value,
      job_post_by: sessionStorage.getItem('user_id'),
      job_post_date: moment(strTime).format('MM/DD/YYYY'),
      req_information: this.postJobForm.controls['req_inf'].value,
      system_name: this.postJobForm.controls['system_name'].value,
      job_sector: this.postJobForm.controls['job_sector'].value,
      duration: this.postJobForm.controls['job_duration'].value,
      shift: this.shit_details.join(','),
      confirm_hr: this.postJobForm.controls['confirmed_hr'].value,
    };
    //console.log(data)
    this.http.postJob(data).subscribe(
      (res) => {
        //console.log(res);
        if (res === 'success') {
          this.http.spinnerHide();
          Swal.fire({
            title: 'Job posted successfully.',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#4C96D7',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.postJobForm.reset();
            }
          });
        } else {
          this.http.spinnerHide();
          Swal.fire({
            title: 'Something went wrong,please try again.',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#4C96D7',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          }).then((result) => {
            if (result.isConfirmed) {
            }
          });
        }
      },
      (err) => {
        this.http.spinnerHide();
        //console.log(err);
        Swal.fire({
          title: 'Something went wrong,please try again.',
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#4C96D7',
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        }).then((result) => {
          if (result.isConfirmed) {
          }
        });
      }
    );
  }

  navigateTo(val) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(val.module_id),
      },
    };
    this.router.navigate([val.routing], navigationExtras);
  }

  /////////////////

  errMsg(msg) {
    Swal.fire({
      title: msg,
      icon: 'error',
      showCancelButton: false,
      confirmButtonColor: '#4C96D7',
      confirmButtonText: 'Ok',
      allowOutsideClick: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        //this.postJobForm.controls.job_id.value.reset();
        this.postJobForm.get('job_id').reset();
      }
    });
  }
}
