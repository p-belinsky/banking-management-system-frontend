import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CustomValidators } from 'src/app/providers/CustomValidators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  userId:any;
  username:any;
  role:any;
  constructor(private route:ActivatedRoute, private router:Router, private userService:UserService) { }

  recievedQuestions: any[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.userId = res.get("username");
      this.role = res.get("role")
    });
      
  }


  resetPasswordForm = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }
   ,CustomValidators.mustMatch('password', 'confirmPassword')
  );

  resetPassword(role:any, username:any, form:any){
    // var username:any;
    // this.userService.getUsernameFromUserId(username).subscribe((res:any)=>{
    //   username = res;
    // });
    alert("username is "+username);
    this.userService.resetUserPassword(role, username,form.password).subscribe((res:any)=>{

    });
    this.router.navigate([('/login')]);
  }
  

}
