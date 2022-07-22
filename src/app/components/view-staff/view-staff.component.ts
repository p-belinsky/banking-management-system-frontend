import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
  chicken:any;
  staffs:any;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getAllStaff();
  }

  getAllStaff(){
    this.adminService.getAllStaff().subscribe((res:any)=>{
      this.staffs=res;
    })
  }

  enableStaff(staff:any, status:any){
    this.adminService.enableStaff(staff,status).subscribe((res:any)=>{
      this.getAllStaff();
    });
  }


  flipStatus(staff:any){
    alert("starting flip Status");
    if(staff.status == "ENABLE"){
      // this.chicken = "DISABLE";
      alert("disabling customer");
      this.enableStaff(staff,0);
    }else if(staff.status=="DISABLE"){
      // this.chicken = "ENABLE";
      alert("enabling customer");
      this.enableStaff(staff,1);
    }
  }
}