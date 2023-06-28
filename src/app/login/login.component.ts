import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormControl,FormGroup,FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  ngForm:FormsModule | any;

  constructor(private router:Router) {

  }
  user_records: any[] = [];
  userData = ({
    email: "",
    passwd: "",
  })

  doLogin(values: any) {
    this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
    if(this.user_records.some((v)=>{
      return v.email == this.userData.email && v.passwd == this.userData.passwd
    })) {
      this.router.navigate(['/showuser']);
      alert("User Login Successfully");
    }
    else{
      alert("Login Failed!!");
    }
  }
}
