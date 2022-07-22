import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-enable-block-customer',
  templateUrl: './enable-block-customer.component.html',
  styleUrls: ['./enable-block-customer.component.css']
})
export class EnableBlockCustomerComponent implements OnInit {
  chicken:any;
  customers:any;

  constructor(private staffService:StaffService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.staffService.getAllCustomers().subscribe((res:any)=>{
      this.customers=res;
    })
  }

  enableCustomer(customer:any, status:any){
    this.staffService.enableCustomer(customer,status).subscribe((res:any)=>{
      this.getAllCustomers();
    });
  }


  flipStatus(customer:any){
    alert("starting flip Status");
    if(customer.status == "ENABLE"){
      // this.chicken = "DISABLE";
      alert("disabling customer");
      this.enableCustomer(customer,0);
    }else if(customer.status=="DISABLE"){
      // this.chicken = "ENABLE";
      alert("enabling customer");
      this.enableCustomer(customer,1);
    }
  }

}