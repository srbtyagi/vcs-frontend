import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantDashboardComponent } from './components/common/applicant-dashboard/applicant-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AddApplicantAdminComponent } from './components/admin-portal/applicants/add-applicant-admin/add-applicant-admin.component';
import { AppSummaryComponent } from './components/admin-portal/applicants/app-summary/app-summary.component';
import { ApplicantsDetailsComponent } from './components/admin-portal/applicants/applicants-details/applicants-details.component';
import { ApplicantsComponent } from './components/admin-portal/applicants/applicants/applicants.component';
import { AssignManagerComponent } from './components/admin-portal/applicants/assign-manager/assign-manager.component';
import { HiredApplicantComponent } from './components/admin-portal/applicants/hired-applicant/hired-applicant.component';
import { JobApplicationAdminComponent } from './components/admin-portal/applicants/job-application-admin/job-application-admin.component';
import { OnboardingAndHiringComponent } from './components/admin-portal/applicants/onboarding-and-hiring/onboarding-and-hiring.component';
import { IncentivesComponent } from './components/admin-portal/finance/incentives/incentives.component';
import { InvoiceReconcileComponent } from './components/admin-portal/finance/invoice-reconcile/invoice-reconcile.component';
import { PayrollApprovalComponent } from './components/admin-portal/finance/payroll-approval/payroll-approval.component';
import { PayrollInvoiceComponent } from './components/admin-portal/finance/payroll-invoice/payroll-invoice.component';
import { PayrollProcessingComponent } from './components/admin-portal/finance/payroll-processing/payroll-processing.component';
import { ClientComponent } from './components/admin-portal/setup/client/client.component';
import { CompanyComponent } from './components/admin-portal/setup/company/company.component';
import { DepartmentComponent } from './components/admin-portal/setup/department/department.component';
import { DropdownListComponent } from './components/admin-portal/setup/dropdown-list/dropdown-list.component';
import { EmployeeComponent } from './components/admin-portal/setup/employee/employee.component';
import { UserRoleComponent } from './components/admin-portal/setup/user-role/user-role.component';
import { AppliedJobsComponent } from './components/candidate-portal/applied-jobs/applied-jobs.component';
import { ApplyJobGuestComponent } from './components/candidate-portal/apply-job-guest/apply-job-guest.component';
import { AssignmentHistoryComponent } from './components/candidate-portal/assignment-history/assignment-history.component';
import { CandidateProfileComponent } from './components/candidate-portal/candidate-profile/candidate-profile.component';
import { ChangePasscodeComponent } from './components/candidate-portal/change-passcode/change-passcode.component';
import { CurrentAssignmentComponent } from './components/candidate-portal/current-assignment/current-assignment.component';
import { EditSkillSetComponent } from './components/candidate-portal/edit-skill-set/edit-skill-set.component';
import { MyDocumentsComponent } from './components/candidate-portal/my-documents/my-documents.component';
import { OnboardingHiringComponent } from './components/candidate-portal/onboarding-hiring/onboarding-hiring.component';
import { PasswordChangeComponent } from './components/candidate-portal/password-change/password-change.component';
import { ProfileComponent } from './components/candidate-portal/profile/profile.component';
import { AssignmentDashboardComponent } from './components/common/assignment-dashboard/assignment-dashboard.component';
import { FinanceDashboardComponent } from './components/common/finance-dashboard/finance-dashboard.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { JobDashboardComponent } from './components/common/job-dashboard/job-dashboard.component';
import { MyjobsDashboardComponent } from './components/common/myjobs-dashboard/myjobs-dashboard.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SetupDashboardComponent } from './components/common/setup-dashboard/setup-dashboard.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ApplyJobComponent } from './components/pages/apply-job/apply-job.component';
import { BusinessComponent } from './components/pages/business/business.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { HealthcareBlogsComponent } from './components/pages/healthcare-blogs/healthcare-blogs.component';
import { HealthcareStaffingComponent } from './components/pages/healthcare-staffing/healthcare-staffing.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HsCaseStudyComponent } from './components/pages/hs-case-study/hs-case-study.component';
import { ITBlogComponent } from './components/pages/it-blog/it-blog.component';
import { ITCaseStudyComponent } from './components/pages/it-case-study/it-case-study.component';
import { ITServiceComponent } from './components/pages/it-service/it-service.component';
import { JobApplicationComponent } from './components/pages/job-application/job-application.component';
import { JobdetailsComponent } from './components/pages/jobdetails/jobdetails.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MyProfileComponent } from './components/pages/my-profile/my-profile.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SkillChecklistComponent } from './components/pages/skill-checklist/skill-checklist.component';
import { SkillSetComponent } from './components/pages/skill-set/skill-set.component';
import { TermsOfServiceComponent } from './components/pages/terms-of-service/terms-of-service.component';
import { AdminSkillSetComponent } from './components/recruiter-portal/admin-skill-set/admin-skill-set.component';
import { BrowseCandidateComponent } from './components/recruiter-portal/browse-candidate/browse-candidate.component';
import { ManageJobsComponent } from './components/recruiter-portal/manage-jobs/manage-jobs.component';
import { PostJobComponent } from './components/recruiter-portal/post-job/post-job.component';
import { StoreDataService } from './services/store-data.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CandidateProfileComponent,
    AppliedJobsComponent,
    PostJobComponent,
    ManageJobsComponent,
    AboutUsComponent,
    ContactUsComponent,
    BrowseCandidateComponent,
    JobsComponent,
    CompanyComponent,
    DepartmentComponent,
    UserRoleComponent,
    ApplyJobComponent,
    JobApplicationComponent,
    EmployeeComponent,
    ApplicantsComponent,
    JobApplicationAdminComponent,
    ApplicantsDetailsComponent,
    ClientComponent,
    DropdownListComponent,
    JobDashboardComponent,
    ApplicantDashboardComponent,
    SetupDashboardComponent,
    MyjobsDashboardComponent,
    AppSummaryComponent,
    AddApplicantAdminComponent,
    JobdetailsComponent,
    OnboardingAndHiringComponent,
    OnboardingHiringComponent,
    HiredApplicantComponent,
    AssignManagerComponent,
    FinanceDashboardComponent,
    PayrollProcessingComponent,
    PayrollApprovalComponent,
    AssignmentDashboardComponent,
    CurrentAssignmentComponent,
    AssignmentHistoryComponent,
    PayrollInvoiceComponent,
    ApplyJobGuestComponent,
    IncentivesComponent,
    SkillChecklistComponent,
    SkillSetComponent,
    BusinessComponent,
    HealthcareStaffingComponent,
    MyProfileComponent,
    ProfileComponent,
    PasswordChangeComponent,
    EditSkillSetComponent,
    InvoiceReconcileComponent,
    ChangePasscodeComponent,
    AdminSkillSetComponent,
    HealthcareBlogsComponent,
    FaqComponent,
    MyDocumentsComponent,
    ITCaseStudyComponent,
    ITBlogComponent,
    ITServiceComponent,
    HsCaseStudyComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 20,
      outerStrokeWidth: 8,
      innerStrokeWidth: 4,
      outerStrokeColor: '#4C96D7',
      innerStrokeColor: '#a6cbeb',
      animationDuration: 300,
    }),
    DpDatePickerModule,
    NgxPaginationModule,
    MatSidenavModule,
    MatMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NgxSpinnerService, StoreDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
