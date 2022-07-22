import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  createAccountForm = new FormGroup({
    customerName: new FormControl('', Validators.required),
    accountNo: new FormControl('', Validators.required),
    accountBalance: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
  });

  createAccount(form: any) {
    this.customerService.createAccount(localStorage.getItem("userId"), form).subscribe(
      (res) => {
        if (res) {
          alert('Account Created');
        }
      },
      (err) => {
        alert('Account Not Created');
      }
    );
  }
}
