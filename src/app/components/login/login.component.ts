import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user:any
  constructor(
    private customerService: CustomerService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(form: any) {
    this.userService
      .getTokenByUsernameAndPassword(form)
      .subscribe((res) => {
        if (res) {
          let token = res;
          let tokenArr = Object.values(token);
          let tokenValue = tokenArr[0];
          this.userService.loginUser(tokenValue)
          this.userService.isLoggedIn()
          this.loadUser(form)

        }
      });
  }

  loadUser(form: any) {
    this.userService.loadUserByUsername(form).subscribe(
      (res) => {
        if (res) {
          alert('User Loaded');
          console.log(res)
          // this.customerService.customer = res;
          // console.log(this.customerService.customer);
          // this.router.navigate(['/customer']);
          this.user = res
          let userId = this.user.userId
          localStorage.setItem("userId", userId)
          let userRole = this.user.role
          if(userRole == "CUSTOMER"){
            this.router.navigate(['/customer'])
          }
          if(userRole == "STAFF"){
            this.router.navigate(['/staff'])
          }
          if(userRole == "ADMIN"){
            this.router.navigate(['/admin'])
          }
        }
      },
      (err) => {
        alert('User Not Loaded');
      }
    );
  }
}
