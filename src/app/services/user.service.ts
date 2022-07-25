import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  isLoggedInBool: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(token: any) {
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    var token = localStorage.getItem('token')

    if (token == null || token == '' || token == undefined) {
      this.isLoggedInBool = false;
      return false;
    }
    else {
      this.isLoggedInBool = true;
      return true;
    }
  }


  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('role');
    this.isLoggedInBool = false;
    this.router.navigate([('/login')])


  }

  getTokenByUsernameAndPassword(form: any) {
    return this.http.post('http://localhost:8080/token', form)
  }

  //takes in a form using username/password as input
  loadUserByUsernamePassword(form: any) {
    return this.http.post('http://localhost:8080/loadUser', form)
  }


  //begin import from james'

  // LoginUser implemented with JWT by Phil
  // --------------------------------
  // loggedInUser:any

  // loginUser(form:any){   //// we need to make these for the back end, right now we only have gets
  //   if(form.role == "customer"){
  //     return this.http.get(`http://localhost:8080/api/loginCustomer/${form.username}/${form.password}`)
  //   }
  //   if(form.role == "staff"){
  //     return this.http.get(`http://localhost:8080/api/loginStaff/${form.username}/${form.password}`)
  //   }
  //   if(form.role == "admin"){
  //     return this.http.get(`http://localhost:8080/api/loginAdmin/${form.username}/${form.password}`)
  //   }
  //   return this.loggedInUser;  // just for the subscribe recieveing null issue and the "not all paths return something" error
  // }
  // --------------------------------

  forgotPassword(form: any): any {

    if (form.role == "customer") {
      return this.http.put(`http://localhost:8080/api/customer/customerForgot`, form, { responseType: "text" });
    }
    if (form.role == "staff") {
      return this.http.put(`http://localhost:8080/api/adminForgot`, form, { responseType: "text" });
    }
    if (form.role == "admin") {
      // return this.http.put(`http://localhost:8080/api/api/staffForgot`, form, {responseType:"text"});
      return this.http.get(`http://localhost:8080/api/adminForgot/` + form.username);
    }
    return "nullstring"
  }


  // form data sent to updateUser
  //
  //updateUserForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   fullname: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required),
  //   mobile: new FormControl('', Validators.required),
  //   role: new FormControl('', Validators.required),
  // })
  updateUser(form: any) {   
    //no longer a userService
    //it will only happen for customers
    
    ///// check to see which methods in the back end 
    //was trying to use LoadUserByUsernamePassword, but it seems TS won't let you access fields unless it knows how it's structured
    //  such as doing user = load; let userRole = user.role;
    //var token = localStorage.getItem('token');
    // var namePass = {"username":"","password":""};
    // namePass["username"] = form.username;
    // namePass["password"] = form.password;
    // var creds = JSON.stringify(namePass);

    // let user = this.loadUserByUsernamePassword(creds);

    // if (form.role == "customer") {
    //   return this.http.put(`http://localhost:8080/api/updateCustomer/${form.username}`, form)
    // }
    // if (form.role == "staff") {
    //   return this.http.put(`http://localhost:8080/api/updateStaff/${form.username}`, form)
    // }
    // if (form.role == "admin") {
    //   return this.http.put(`http://localhost:8080/api/updateAdmin/${form.username}`, form)
    // }
    // return form;
  }

  registerUser(form: any): any {
    // if(form.role == "customer"){
    //   return this.http.post(`http://localhost:8080/api/register`, form)
    // }
    // else if(form.role == "staff"){
    //   return this.http.post(`http://localhost:8080/api/admin/staff`, form)
    // }
    // else if(form.role == "admin"){
    //   return this.http.post(`http://localhost:8080/api/staff`, form, {responseType:"text"})
    // }
    // return "username not register";
    if (form.role == "CUSTOMER") {
      return this.http.post(`http://localhost:8080/api/customer/register`, form);
    } else if (form.role == "STAFF") {
      return this.http.post(`http://localhost:8080/api/admin/staff`, form);
    } else if (form.role == "ADMIN") {
      return this.http.post(`http://localhost:8080/api/staff`, form);
    }

    //placeholder code removed
    // if(form.role == "customer"){
    //   return this.http.put(`http://localhost:8080/api/register`, form)
    // }
    // if(form.role == "staff"){
    //   return this.http.put(`http://localhost:8080/api/admin/staff`, form)
    // }
    // if(form.role == "admin"){
    //   return this.http.put(`http://localhost:8080/api/staff`, form)
    // }
    // alert("something bad happened at UserService.RegisterUser(form); could not match form.role to customer/staff/admin");
    // return this.loggedInUser;
  }

  //james' addition to user service
  getQuestions(username: any) {
    return this.http.get(`http://localhost:8080/api/securityQA/questionsList/${username}`); // needs a
  } ///// should this be a post ?

  createQA(form: any) {
    //modified to get username back from the token by http request
    let userId = this.getUserIdFromLocalStorage();
    alert("user id = "+userId);
    return this.http.post(`http://localhost:8080/api/securityQA/createQA/${userId}`, form);
  }

  matchAnwerToQuestion(userId:any, form: any) {
    //modified to get username back from the token by http request
    return this.http.post(`http://localhost:8080/api/securityQA/matchQA/${userId}`, form);
  }

  //i think this has to be made in the back end
  resetUserPassword(role:any, username: any, password: any):any {
    return this.http.put(`http://localhost:8080/api/resetPass/${role}/${username}`, password);
  }

  getUserIdFromLocalStorage(): any {
    var token = localStorage.getItem('userId')

    if (token) {
      return token;
    } else {
      return -1;
    }
  }
  getUsernameFromUserIdInLocalStorage(): any {
    var userId = this.getUserIdFromLocalStorage();
    if (userId != -1) {
      return this.http.get(`http://localhost:8080/api/getUsername/${userId}`);
    } else {
      return "-1";
    }
  }

  //get User object from userID
  getUserFromUserIdInToken(): any {
    var userId = this.getUserIdFromLocalStorage();
    return this.http.get(`http://localhost:8080/api/getUser/${userId}`);
  }

  getUsernameFromUserId(userId:any):any{
    return this.http.get(`http://localhost:8080/api/getUser/${userId}`);
  }
  
  getUserIdFromUsername(username:any):any{
    return this.http.get(`http://localhost:8080/api/getUserIdFromUsername/${username}`);
  }

  getRolefromUserId(userId: any):any {
    return this.http.get(`http://localhost:8080/api/getRoleByUserId/${userId}`);
  }
}
