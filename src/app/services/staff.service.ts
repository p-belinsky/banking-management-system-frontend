import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  
  
  baseurl:string = "http://localhost:8080/";
  constructor(private http:HttpClient) { }

  //beneficiaries
  allBeneficiaryNeedingApproval() {
    return this.http.get(`${this.baseurl}api/staff/beneficiary`);
  }
  approveBeneficiary(beneficiary: any) {
    beneficiary.status = 1;
    return this.http.put(`${this.baseurl}api/staff/beneficiary`,beneficiary);
  }

  //account
  getAllAccountNeedingApproval() {
    return this.http.get(`${this.baseurl}api/staff/account/approve`);
  }
  approveAccount(account: any) {
    account.accountStatus = 1;
    return this.http.put(`${this.baseurl}api/staff/account/approve`,account);
  }

  //customer
  getAllCustomers() {
    return this.http.get(`${this.baseurl}api/staff/customer`);
  }
  enableCustomer(customer: any, status:any) {
    //0 = disable, 1 = enable
    customer.status = status;
    return this.http.put(`${this.baseurl}api/staff/customer`,customer);
  }

  addStaff(staffForm: any) {
    return this.http.post(`${this.baseurl}api/admin/staff`,staffForm);
  }
}
