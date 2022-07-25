import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.css']
})
export class SecurityQuestionsComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  questionForm = new FormGroup({
    question: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
    // question2: new FormControl('', Validators.required),
    // answer2: new FormControl('', Validators.required),
    // question3: new FormControl('', Validators.required),
    // answer3: new FormControl('', Validators.required),
  })

  submitQA(form:any){
    this.userService.createQA(form).subscribe((res:any)=>{
        this.router.navigate([('')]); // should i also clear the form
        // the user can probably just re-route themselves using one of the tabs in the header
      }); 
    }
  }
