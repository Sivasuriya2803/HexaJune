import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employ } from '../employ';
import { Employe } from '../employe';

@Component({
  selector: 'app-employ-add',
  imports: [CommonModule,FormsModule],
  templateUrl: './employ-add.html',
  styleUrl: './employ-add.css'
})
export class EmployAdd {
   eno : number;
  nam : string;
  gen : string;
  dpt : string;
  dsg : string;
  bas : number;

  res : string;

  employ : Employ;
  constructor(private employService : Employe) {
  
  }

  addEmploy() {
      this.employ = new Employ()
    this.employ.empno = this.eno;
    this.employ.name = this.nam;
    this.employ.gender = this.gen;
    this.employ.dept = this.dpt;
    this.employ.desig = this.dsg;
    this.employ.basic = this.bas;

    this.employService.addEmploy(this.employ).subscribe(x => {
      this.res = x.toString();
    })

  }

}
