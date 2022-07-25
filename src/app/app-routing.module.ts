import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ApproveAccountComponent } from './components/approve-account/approve-account.component';
import { ApproveBeneficiaryComponent } from './components/approve-beneficiary/approve-beneficiary.component';
import { BeneficiaryDetailComponent } from './components/beneficiary-detail/beneficiary-detail.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateStaffComponent } from './components/create-staff/create-staff.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerTransferComponent } from './components/customer-transfer/customer-transfer.component';
import { EnableBlockCustomerComponent } from './components/enable-block-customer/enable-block-customer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SearchTransactionsByAccountNumberComponent } from './components/search-transactions-by-account-number/search-transactions-by-account-number.component';
import { SecurityQuestionsComponent } from './components/security-questions/security-questions.component';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { ViewStaffComponent } from './components/view-staff/view-staff.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"customer",
    component:CustomerDashboardComponent,
    canActivate:[AuthGuard],
    data: {
      role: 'CUSTOMER'
    },
    children:[
      {
        path:"",
        component:ViewAccountsComponent
      },
      {
        path:"viewAccounts",
        component:ViewAccountsComponent
      },
      {
        path:"createAccount",
        component:CreateAccountComponent
      },
      {
        path:"addBeneficiary",
        component:AddBeneficiaryComponent
      },
      {
        path:"viewBeneficiary",
        component:BeneficiaryDetailComponent
      },
      {
        path:"customerTransfer",
        component:CustomerTransferComponent
      },
      {
        path:"transactions",
        component:SearchTransactionsByAccountNumberComponent
      },
      {
        path:"updateUser",
        component:UpdateUserComponent
      },
      {
        path:"account/:accountid",
        component:AccountDetailsComponent
      },
      {
        path:"viewAccounts/account/:accountid",
        component:AccountDetailsComponent
      },
      {
        path:"createSQA",
        component:SecurityQuestionsComponent
      }
    ]
  },
  {
    path:"create-account",
    component:CreateAccountComponent
  },
  {
    path:"staff",
    component: StaffDashboardComponent,
    canActivate:[AuthGuard],
    data: {
      role: 'STAFF'
    },
    children:[
      {
        path:"",
        component:SearchTransactionsByAccountNumberComponent
      },
      {
        path:"transactions",
        component:SearchTransactionsByAccountNumberComponent
      },
      {
        path:"beneficiaries",
        component:ApproveBeneficiaryComponent
      },
      {
        path:"accounts",
        component:ApproveAccountComponent
      },
      {
        path:"customers",
        component:EnableBlockCustomerComponent
      }
    ]
  },
  {
    path:"admin",
    component:AdminDashboardComponent,
    canActivate:[AuthGuard],
    data: {
      role: 'ADMIN'
    },
    children:[
      {
        path:"",
        component:CreateStaffComponent
      },
      {
        path:"createStaff",
        component:CreateStaffComponent
      },
      {
        path:"enableDisableStaff",
        component:ViewStaffComponent
      }
    ]
  },
  {
    path:"forgotPassword/:username",
    component: ForgotPasswordComponent
  },
  {
    path:"registration",
    component: RegistrationComponent
  },
  {
    path:"updateUser",
    component:UpdateUserComponent
  },
  {
    path:"resetPassword/:role/:username",
    component:ResetPasswordComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
