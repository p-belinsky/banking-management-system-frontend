import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
  }

  addStaff(staffForm:any){
    this.staffService.addStaff(staffForm).subscribe((res:any)=>{

    })
  }

}