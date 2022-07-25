import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:any;
  constructor(private router:Router, private userService:UserService, private customerService:CustomerService) { }

  loggedInUser:any 
  // = {
  //   username: "myUsername",
  //   fullname: "jamesc",
  //   password: 6647724,
  //   confirmPassword: 6647724,
  //   mobile: 444444444,
  //   role: "customer"
  // };
  // variable here for the user who is logged in
  // their role and id will be passed 

  // userToBeDisplayed:any               ////////////  this probably wont be used
  // this value will be the response from the back end
  // then will be used to pre-fill the form 
  
  ngOnInit(): void {
    //james' initial implementation
    //this.loggedInUser = this.userService.loggedInUser;
    let userId = localStorage.getItem('userId');
    this.customerService.getCustomerById(userId).subscribe((res:any)=>{
      this.user = res;
    });


    let username = new FormControl(this.user.username, Validators.required);
    let fullname = new FormControl(this.user.fullname, Validators.required);
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('', Validators.required);
    let mobile = new FormControl(this.user.mobile, Validators.required);
    let role = new FormControl(this.user.role, Validators.required);
  }


  
  // this will be used to send the updated info to the back-end
  updateUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
  })

  // this.form.controls[updateUserForm].disable(); // im trying to disable the form

  update(form:any){
    let userId = localStorage.getItem('userId');
    this.customerService.updateUser(userId, form).subscribe((res:any)=>{
      this.router.navigate([('/customer')])
    });
  }

}
