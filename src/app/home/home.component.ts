import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){

  }

  regBtn(){
    this.router.navigate(['/register']);
  }

  logBtn(){
    this.router.navigate(['/login']);
  }

  showBtn(){
    this.router.navigate(['/showuser']);
  }
}
