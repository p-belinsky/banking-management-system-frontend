import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { BeneficiaryDetailComponent } from './components/beneficiary-detail/beneficiary-detail.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerTransferComponent } from './components/customer-transfer/customer-transfer.component';
import { LoginComponent } from './components/login/login.component';


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
    component:CustomerDashboardComponent
  },
  {
    path:"create-account",
    component:CreateAccountComponent
  },
  {
    path:"add-beneficiary",
    component:AddBeneficiaryComponent
  },
  {
  path:"view-beneficiary",
  component:BeneficiaryDetailComponent
  },
  {
    path:"customer-transfer",
    component:CustomerTransferComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
