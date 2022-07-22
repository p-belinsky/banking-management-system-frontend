import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { BeneficiaryDetailComponent } from './components/beneficiary-detail/beneficiary-detail.component';
import { CustomerTransferComponent } from './components/customer-transfer/customer-transfer.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { StaffDashboardComponent } from './components/staff-dashboard/staff-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ApproveAccountComponent } from './components/approve-account/approve-account.component';
import { CreateStaffComponent } from './components/create-staff/create-staff.component';
import { SearchTransactionsByAccountNumberComponent } from './components/search-transactions-by-account-number/search-transactions-by-account-number.component';
import { ViewStaffComponent } from './components/view-staff/view-staff.component';
import { EnableBlockCustomerComponent } from './components/enable-block-customer/enable-block-customer.component';
import { ApproveBeneficiaryComponent } from './components/approve-beneficiary/approve-beneficiary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CustomerDashboardComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    BeneficiaryDetailComponent,
    CustomerTransferComponent,
    StaffDashboardComponent,
    AdminDashboardComponent,
    ApproveAccountComponent,
    CreateStaffComponent,
    SearchTransactionsByAccountNumberComponent,
    ViewStaffComponent,
    EnableBlockCustomerComponent,
    ApproveBeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
