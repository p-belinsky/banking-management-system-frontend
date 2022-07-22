import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-approve-beneficiary',
  templateUrl: './approve-beneficiary.component.html',
  styleUrls: ['./approve-beneficiary.component.css']
})
export class ApproveBeneficiaryComponent implements OnInit {

  beneficiaries:any;
  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
    this.staffService.allBeneficiaryNeedingApproval().subscribe((res:any)=>{
      this.beneficiaries = res;
    });
  }

  getAllBeneficiaryNeedingApproval(){
    this.staffService.allBeneficiaryNeedingApproval().subscribe((res:any)=>{
      this.beneficiaries = res;
    })
  }

  approveBeneficiary(beneficiary:any){
    this.staffService.approveBeneficiary(beneficiary).subscribe((res:any)=>{
      this.getAllBeneficiaryNeedingApproval();
    });
  }
}