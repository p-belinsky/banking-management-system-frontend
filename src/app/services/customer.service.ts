import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer:any

  constructor(private http:HttpClient) { }


  createAccount(customerId: any, form:any){
    return this.http.post('http://localhost:8080/api/customer/'+ customerId +'/account', form);
  }

  loadCustomerByUsername(username:any){
    return this.http.get('http://localhost:8080/api/customer/load/'+username);
  }



  getAccountsByCustomerId(customerId:any){
    return this.http.get('http://localhost:8080/api/customer/'+ customerId + '/account')
  }

  addBeneficiaryToAccount(customerId:any, form:any){
     return this.http.post('http://localhost:8080/api/customer/'+customerId + '/beneficiary', form)
   }

   getAllBeneficiaryByCustomerId(customerId:any){
    return this.http.get('http://localhost:8080/api/customer/'+customerId+ '/beneficiary')
   }

   deleteBeneficiaryByCustomerIdAndBeneficiaryId(customerId:any, beneficiaryId:any){
    return this.http.delete('http://localhost:8080/api/customer/'+customerId+'/beneficiary/'+beneficiaryId,{ responseType: "text"} )
   }

   getAllAccountsByCustomerId(customerId:any){
    return this.http.get('http://localhost:8080/api/customer/'+customerId+ '/account')
   }

   transfer(form:any){
    return this.http.put('http://localhost:8080/api/customer/transfer', form)
   }

   loginUser(token:any) {
    localStorage.setItem('token', token);
  }
   
   
}
