import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})

export class ShowuserComponent implements OnInit {

  ngForm: FormsModule | any;

  constructor(private router: Router,private path: Router) {

    this.user_records = JSON.parse(localStorage.getItem('users') || '{}')
  }

  ngOnInit(): void {
  
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

  onEdit(datas: any) {
    // const date = new Date("2019-01-19 14:00:12");
    // console.log(date);

    // const str = "2021-04-25T00:00:00.000Z";
    // const output = str.split("")[0];
    // console.log(output);
    // return;

    console.log(datas)
    this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
    if (this.user_records !== null) {
      const currentUser = this.user_records.find((m: any) => m.userId == datas);
      if (currentUser != undefined) {
        var end_point = '/updateUser/' + datas
        this.router.navigate([end_point]);
      }
    }
  }
  // delete function 
  onDelete(datas: any){
    this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
    // console.log( this.user_records)
    // console.log('datas.......11...')
    for(var i =0; i < this.user_records.length; i++){
      if(this.user_records[i].userId==datas){
        // console.log( this.user_records[i].userId)
        // console.log('datas...122.......')
        this.user_records.splice(i, 1);
      }
    }
    console.log( this.user_records)
    console.log('datas..........')
   
    localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("User Data Successfully Deleted");
      this.path.navigate(['/showuser']); 
  }
}
