import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  baseurl:string = "http://localhost:8080/";
  constructor(private http:HttpClient) { }

  getAllStaff() {
    return this.http.get(`${this.baseurl}api/admin/staff`);
  }
  enableStaff(staff: any, status: any) {
    staff.status = status;
    return this.http.put(`${this.baseurl}api/admin/staff`,staff, {responseType:"text"});
  }
}