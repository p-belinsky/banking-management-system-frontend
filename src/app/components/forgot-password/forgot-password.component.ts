import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  username:any;
  userId:any;
  role:any;
  constructor(private route:ActivatedRoute, private router:Router, private userService:UserService) { }

  recievedQuestions: any[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.username = res.get("username");


      this.userService.getUserIdFromUsername(this.username).subscribe((res:any)=>{
        this.userId = res;
        this.userService.getRolefromUserId(this.userId).subscribe((res:any)=>{
          this.role = res;
        })
      });
      

      this.userService.getQuestions(this.username).subscribe((res:any)=>{
        this.recievedQuestions = res;
      });
    })


    
  }

  submitAnswerForm = new FormGroup({
    question:  new FormControl('',Validators.required),
    answer: new FormControl('', Validators.required)
  })

  questions: any[] = [
    {viewValue: this.recievedQuestions[0]},
    {viewValue: this.recievedQuestions[1]},
    {viewValue: this.recievedQuestions[2]}
  ];
  // questions: any[] = [                     // reference from online
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},  
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

  submitAnswer(form:any){


    this.userService.matchAnwerToQuestion(this.userId, form).subscribe((res:any)=>{
      if(res){
        this.router.navigate([('/resetPassword/'+this.role+'/'+this.username)]);
      } else {
        alert("incorrect answer");
      }
    }); 
  } 


  


}
