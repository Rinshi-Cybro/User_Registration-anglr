import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  
  hide = true;
  ngForm:FormsModule | any;
  user: { id: number; } | undefined;
  

  constructor(private route: ActivatedRoute,private path: Router){
    this.route.queryParams.subscribe((res)=> {
      console.log( res)
      console.log('user..........')
      this.userData.userId = res['id']
    });
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    console.log('checking........')

    this.ngForm = new FormsModule()
    this.user_records = JSON.parse(localStorage.getItem('users') || '{}');

    // console.log(this.user_records)
    // console.log('user_records........')


    // const oldRecords = localStorage.getItem('users');
    if (this.user_records !== null) {
      // const users = JSON.parse(oldRecords);
      const currentUser = this.user_records.find((m: any) => m.userId == this.route.snapshot.params['id']);
      // const aa = this.user_records.find((m: any) => console.log('fffff'+this.userData.userId));

    // console.log(currentUser)
    // console.log('currentUser........')

      if (currentUser != undefined) {
        this.userData.FirstName = currentUser.FirstName;
        this.userData.LastName = currentUser.LastName; 
        this.userData.gender = currentUser.gender; 
        this.userData.country = currentUser.country; 
        this.userData.email = currentUser.email; 
        this.userData.UserName = currentUser.UserName; 
        this.userData.passwd = currentUser.passwd; 
        this.userData.cpasswd = currentUser.cpasswd; 
        this.userData.Dob = currentUser.Dob; 
        this.userData.pincode = currentUser.pincode; 
        this.userData.profilePhoto = currentUser.profilePhoto;   
        this.userData.userId = currentUser.userId;   
        
      }
    }
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

  url = "./assets/image.jpg";
  file = " profilePhoto";

  onselectFiles(e: any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=> {
        this.url = event .target.result;
      }
    }
  }

  getNewUser() {
    const oldRecords = localStorage.getItem('users');
    if (oldRecords !== null) {
      const users = JSON.parse(oldRecords);
      return users.length + 1;
    } else {
      return 1;
    }
  }

  UpdateUser(datas: any){
    console.log(datas)

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

    this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
    for(var i = 0; i < this.user_records.length; i++){
      if(this.user_records[i].userId==datas){
        this.user_records[i].FirstName = this.userData.FirstName;
        this.user_records[i].LastName = this.userData.LastName; 
        this.user_records[i].gender = this.userData.gender; 
        this.user_records[i].country = this.userData.country; 
        this.user_records[i].email = this.userData.email; 
        this.user_records[i].UserName = this.userData.UserName; 
        this.user_records[i].passwd = this.userData.passwd; 
        this.user_records[i].cpasswd = this.userData.cpasswd; 
        this.user_records[i].Dob = this.userData.Dob; 
        this.user_records[i].pincode = this.userData.pincode;
        this.user_records[i].profilePhoto = this.userData.profilePhoto;   
        this.user_records[i].userId = this.userData.userId;   
      }
    }

      // this.user_records.push(this.userData);
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("User Data Successfully Updated");
      this.path.navigate(['/showuser']);

    // else{
      // const user_records = [];
      // this.user_records.push(this.userData);
      // localStorage.setItem("users",JSON.stringify(this.userData));
      // alert("User Data Successfully Registered");
    // }
    // this.user_records.push(this.userData);
    // localStorage.setItem("users",JSON.stringify(this.user_records));
    // alert("Successfully Updated!!");
    // this.path.navigate(['/showuser']);


    // const latestId = this.getNewUser();
    // this.userData.userId = latestId;
    // const oldRecords = localStorage.getItem('users');
    // if (oldRecords !== null) {
    //   const users = JSON.parse(oldRecords);
    //   this.user_records.push(this.userData);
    //   localStorage.setItem("users",JSON.stringify(this.user_records));
    //   alert("User Data Successfully Registered");
    // } 
    // else{
    //   const user_records = [];
    //   this.user_records.push(this.userData);
    //   localStorage.setItem("users",JSON.stringify(this.userData));
    //   alert("User Data Successfully Registered");
    // }
  }
}
