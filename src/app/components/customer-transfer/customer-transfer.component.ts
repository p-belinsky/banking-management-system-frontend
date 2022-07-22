import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-transfer',
  templateUrl: './customer-transfer.component.html',
  styleUrls: ['./customer-transfer.component.css']
})
export class CustomerTransferComponent implements OnInit {

  displayedColumns: string[] = ['accountNo', 'accountBalance', 'accountType', 'select'];
  items:any
  selectedAccount:any

    transferForm = new FormGroup({
    fromAccountNo: new FormControl('', Validators.required),
    toAccountNo: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
    transactionType: new FormControl('', Validators.required)
  });

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllAccountsByCustomerId(localStorage.getItem('userId')).subscribe(res => {
      console.log(res)
      this.items = res

    },
    err=> {
      alert(err)
    })


  }

  selectSourceAccount(accountNo:any){
    this.selectedAccount = accountNo;
    alert("Transfer From Account Number : " + accountNo)
  }

  transfer(form:any, selectedAccount:any){
    const transferObj = {
      "amount": form.amount,
      "transactionType": form.transactionType,
      "toAccountNo": form.toAccountNo,
      "fromAccountNo": selectedAccount,
      "reason": form.reason,
      "transferBy": "CUSTOMER"
    }

    this.customerService.transfer(transferObj).subscribe(res => {
        if(res){
          alert("Transfer Successful")
          console.log(res)
        }
    })
  }

}
