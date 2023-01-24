import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ApplicantDashboardComponent } from './components/common/applicant-dashboard/applicant-dashboard.component';
import { AssignmentDashboardComponent } from './components/common/assignment-dashboard/assignment-dashboard.component';
import { FinanceDashboardComponent } from './components/common/finance-dashboard/finance-dashboard.component';
import { JobDashboardComponent } from './components/common/job-dashboard/job-dashboard.component';
import { MyjobsDashboardComponent } from './components/common/myjobs-dashboard/myjobs-dashboard.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Elite Mente' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candi-profile', component: CandidateProfileComponent },
  { path: 'applied-jobs', component: AppliedJobsComponent },
  { path: 'manage-jobs', component: ManageJobsComponent },
  { path: 'post-jobs', component: PostJobComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'browse-candidate', component: BrowseCandidateComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'user-role', component: UserRoleComponent },
  { path: 'apply-job', component: ApplyJobComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'job-applications', component: JobApplicationComponent },
  { path: 'applicants', component: ApplicantsComponent },
  { path: 'job-applications_admin', component: JobApplicationAdminComponent },
  { path: 'applicant-details', component: ApplicantsDetailsComponent },
  { path: 'client', component: ClientComponent },
  { path: 'dropdown-list', component: DropdownListComponent },
  { path: 'job-dashboard', component: JobDashboardComponent },
  { path: 'applicant-dashboard', component: ApplicantDashboardComponent },
  { path: 'setup-dashboard', component: SetupDashboardComponent },
  { path: 'myjobs-dashboard', component: MyjobsDashboardComponent },
  { path: 'app-summary', component: AppSummaryComponent },
  { path: 'add-applicant-admin', component: AddApplicantAdminComponent },
  { path: 'job-details', component: JobdetailsComponent },
  { path: 'onboarding-hiring', component: OnboardingAndHiringComponent },
  { path: 'recruitee-onboarding-hiring', component: OnboardingHiringComponent },
  { path: 'hired-applicant', component: HiredApplicantComponent },
  { path: 'assign-Manager', component: AssignManagerComponent },
  { path: 'finance-dashboard', component: FinanceDashboardComponent },
  { path: 'payroll-processing', component: PayrollProcessingComponent },
  { path: 'payroll-approval', component: PayrollApprovalComponent },
  { path: 'assignment-history', component: AssignmentHistoryComponent },
  { path: 'current-assignment', component: CurrentAssignmentComponent },
  { path: 'assignment-dashboard', component: AssignmentDashboardComponent },
  { path: 'payroll-invoice', component: PayrollInvoiceComponent },
  { path: 'apply-job-guest', component: ApplyJobGuestComponent },
  { path: 'incentives', component: IncentivesComponent },
  { path: 'case-study', component: SkillChecklistComponent },
  { path: 'skill-set', component: SkillSetComponent },
  { path: 'clients', component: BusinessComponent },
  { path: 'healthcare-staffing', component: HealthcareStaffingComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'password-change', component: PasswordChangeComponent },
  { path: 'edit-skill-set', component: EditSkillSetComponent },
  { path: 'invoice-reconcile', component: InvoiceReconcileComponent },
  { path: 'change-passcode', component: ChangePasscodeComponent },
  { path: 'skill-set-admin', component: AdminSkillSetComponent },
  { path: 'it-blog', component: HealthcareBlogsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'my-documents', component: MyDocumentsComponent },
  { path: 'research', component: ITCaseStudyComponent },
  { path: 'blog', component: ITBlogComponent },
  { path: 'ip-services', component: ITServiceComponent },
  { path: 'it-services', component: HsCaseStudyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
