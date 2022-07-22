import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  accounts:any

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAccountsByCustomerId(localStorage.getItem("userId")).subscribe(res => {
      console.log(res)
      this.accounts = res
    })

  }

}
