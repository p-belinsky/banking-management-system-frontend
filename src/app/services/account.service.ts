import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  baseurl:string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getAccountByAccountNo(accountNo: any) {
    //alert("accountService searching for Account");
    return this.http.get(`${this.baseurl}api/staff/account/`+accountNo)
  }

}