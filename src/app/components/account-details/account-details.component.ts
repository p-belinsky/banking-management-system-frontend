import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private accountService: AccountService, private route:ActivatedRoute) { }

  account:any
  isFetched:boolean = false;

  ngOnInit(): void {
      this.route.paramMap.subscribe(res => {
        var accountId = res.get('accountid')
     
      this.accountService.getAccountByCustomerIdAndAccountId(localStorage.getItem('userId'),accountId).subscribe((res: any) =>{
                          this.account=res
                          this.isFetched = true
      })
    })
  }

}