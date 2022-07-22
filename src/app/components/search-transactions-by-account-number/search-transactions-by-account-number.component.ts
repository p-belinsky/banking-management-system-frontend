import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-search-transactions-by-account-number',
  templateUrl: './search-transactions-by-account-number.component.html',
  styleUrls: ['./search-transactions-by-account-number.component.css']
})
export class SearchTransactionsByAccountNumberComponent implements OnInit {

  accountNo:any;
  account:any;
  isFetched:boolean = false;
  transactions:any;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  searchAccountNo(accountNoForm:any){
    this.accountNo = accountNoForm.accountNoField;
    this.accountService.getAccountByAccountNo(this.accountNo).subscribe((res:any)=>{
      this.account = res;
      this.isFetched = true;
      this.transactions = this.account.get("transactions");
    });
  }

}