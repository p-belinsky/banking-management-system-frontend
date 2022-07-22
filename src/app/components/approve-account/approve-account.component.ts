import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-approve-account',
  templateUrl: './approve-account.component.html',
  styleUrls: ['./approve-account.component.css']
})
export class ApproveAccountComponent implements OnInit {

  accounts:any;
  chicken:any;
  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
    this.staffService.getAllAccountNeedingApproval().subscribe((res:any)=>{
      this.accounts = res;
    });
  }

  getAllAccountNeedingApproval(){
    this.staffService.getAllAccountNeedingApproval().subscribe((res:any)=>{
      this.accounts = res;
    })
  }

  approveAccount(account:any){
    this.staffService.approveAccount(account).subscribe((res:any)=>{
      this.getAllAccountNeedingApproval();
    });
  }
}