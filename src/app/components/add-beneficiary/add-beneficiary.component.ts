import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {


  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
  }

  addBeneficiaryForm = new FormGroup({
    beneficiaryNo: new FormControl('', Validators.required),
    beneficiaryName: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)


  })

  addBeneficiaryToAccount(form:any){
      this.customerService.addBeneficiaryToAccount(localStorage.getItem("userId"), form).subscribe(res => {
            if(res){
              alert("Beneficiary added")
            }
      },
      
      err => {
          alert(err)
      })


  }

}
