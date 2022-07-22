import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-beneficiary-detail',
  templateUrl: './beneficiary-detail.component.html',
  styleUrls: ['./beneficiary-detail.component.css']
})
export class BeneficiaryDetailComponent implements OnInit {

  displayedColumns: string[] = ['accountNo', 'beneficiaryName', 'actions'];
  items:any

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {

    this.getAllBeneficiary()

  }

  deleteBeneficiary(beneficiaryId:any){
    this.customerService.deleteBeneficiaryByCustomerIdAndBeneficiaryId(localStorage.getItem('userId'), beneficiaryId).subscribe(res => {
      alert(res)
      this.getAllBeneficiary()
    },
    err=>{
      alert(err)
    })
  }

  getAllBeneficiary(){
    this.customerService.getAllBeneficiaryByCustomerId(localStorage.getItem("userId")).subscribe(res => {
      console.log(res)
      this.items = res
    })
  }



}
