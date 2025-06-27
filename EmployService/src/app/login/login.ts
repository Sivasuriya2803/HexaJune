import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Employe } from '../employe';

@Component({
  selector: 'app-login',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userName : string;
  passCode : string;

  constructor(private _employService : Employe,
        private _router : Router

  ) {}

  login() {
    this._employService.login(this.userName,this.passCode).subscribe(x => {
      alert(x);
      if (x=="1") {
        this._router.navigate(["menu"]);
      } else {
        alert("Invalid Credentials...");
      }
    })
  }

}
