import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  hide = true;

  ngForm:FormsModule | any;

  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.ngForm = new FormsModule()

    // const localData = localStorage.getItem('users');
    // if(localData != null){
    //   this.user_records = JSON.parse(localData);
    // }
  }

  user_records: any[] = [];
  userData = {
    userId: "",
    FirstName: "",
    LastName: "",
    gender: "",
    country: "",
    email: "",
    UserName: "",
    passwd: "",
    cpasswd: "",
    Dob: "",
    pincode: "",
    profilePhoto: ""
  };

  //declearing html elements
  url = "./assets/image.jpg";
  file = " profilePhoto";

  // image showing functionality when we choose an image to upload
 // when we choose a foto to upload
  onselectFiles(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=> {
        this.url = event .target.result;
      }
    }
  }

// get new user already exists
  getNewUser() {
    const oldRecords = localStorage.getItem('users');
    if (oldRecords !== null) {
      const users = JSON.parse(oldRecords);
      return users.length + 1;
    } else {
      return 1;
    }
  }

  // form submition function
  SubmitRegister(values: any){
    // console.log(this.userData.)

    // check validation each field
    if(this.userData.FirstName.length <= 0){
        alert("First Name is required!");
      return;
    }

    if(this.userData. LastName.length <= 0){
        alert("Last Name is required!");
      return;
    }

    if(this.userData.gender.length <= 0){
        alert("Gender is required!");
      return;
    }

    if(this.userData.country.length <= 0){
        alert("Country is required!");
      return;
    }

    if(this.userData.email.length <= 0){
      alert("Email is required!");
    return;
    }

    if(this.userData.UserName.length <= 0){
      alert("User Name is required!");
    return;
    }

    if(this.userData.passwd.length <= 0){
      alert("Password is required!");
    return;
    }

    if(this.userData.cpasswd.length <= 0){
      alert("Conf Password is required!");
    return;
    }

    if(this.userData.Dob.length <= 0){
      alert("Date of Birth is required!");
    return;
    }

    if(this.userData.pincode.length <= 0){
      alert("Pin Code is required!");
    return;
    }

    const latestId = this.getNewUser();
    this.userData.userId = latestId;
    const oldRecords = localStorage.getItem('users');
    if (oldRecords !== null) {
      // const users = JSON.parse(oldRecords);
      this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
      // this.user_records.push(this.userData);
      // localStorage.setItem("users",JSON.stringify(this.user_records));
      // alert("User Data Successfully Registered");
    } 
    else{
      const user_records = [];
      // this.user_records.push(this.userData);
      // localStorage.setItem("users",JSON.stringify(this.userData));
      // alert("User Data Successfully Registered");
    }
    
    // const str = this.userData.Dob;
    // const output = str.split(" ")[0];
    // this.userData.Dob=output;
    // console.log(output);

    this.user_records.push(this.userData);
    localStorage.setItem("users",JSON.stringify(this.user_records));
    alert("User Data Successfully Registered");

    // this.clearData();
    window.location.reload()

    // this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
    // if(this.user_records.some((v)=>{
    //   return v.email == this.userData.email
    // })) {
    //   alert("Duplicate Data!!");
    // }
    // else {
    //   this.user_records.push(this.userData)
    //   localStorage.setItem("users",JSON.stringify(this.user_records));
    //   alert("User Data Successfully Registered");
    //   this.userData = {
    //     userId: "",
    //     FirstName: "",
    //     LastName: "",
    //     gender: "",
    //     country: "",
    //     email: "",
    //     UserName: "",
    //     passwd: "",
    //     cpasswd: "",
    //     Dob: "",
    //     pincode: "",
    //     profilePhoto: ""
    //   };
    // }

  } 
  clearData(){
    this.userData = {
      userId: "",
      FirstName: "",
      LastName: "",
      gender: "",
      country: "",
      email: "",
      UserName: "",
      passwd: "",
      cpasswd: "",
      Dob: "",
      pincode: "",
      profilePhoto: ""
    };
  }
}
