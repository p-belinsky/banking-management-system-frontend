import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-approve-beneficiary',
  templateUrl: './approve-beneficiary.component.html',
  styleUrls: ['./approve-beneficiary.component.css']
})
export class ApproveBeneficiaryComponent implements OnInit {

  beneficiaries:any;
  accounts:any;

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
    // this.staffService.allBeneficiaryNeedingApproval().subscribe((res:any)=>{
    //   this.beneficiaries = res;
    // });
    this.getAllBeneficiaryNeedingApproval();
  }

  getAllBeneficiaryNeedingApproval(){
    this.staffService.allBeneficiaryNeedingApproval().subscribe((res:any)=>{
      this.beneficiaries = res; 
      this.accounts = this.beneficiaries.accounts;
      console.log(res);
    })
  }

  approveBeneficiary(beneficiary:any){
    this.staffService.approveBeneficiary(beneficiary).subscribe((res:any)=>{
      this.getAllBeneficiaryNeedingApproval();
    });
  }

}