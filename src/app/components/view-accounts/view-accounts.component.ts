import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {

  accounts:any
  constructor(private router:Router, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAccountsByCustomerId(localStorage.getItem("userId")).subscribe(res => {
      console.log(res)
      this.accounts = res
    })
  }
}
