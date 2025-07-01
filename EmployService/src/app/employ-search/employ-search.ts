import { Component } from '@angular/core';
import { Employe } from '../employe';
import { Employ } from '../employ';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employ-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './employ-search.html',
  styleUrl: './employ-search.css'
})
export class EmploySearch {
   empno : number;
  employ : Employ;

  search() {
    this._employService.searchEmploy(this.empno).subscribe(x => {
      this.employ = x;
    })  
  }
  constructor(private _employService : Employe) {

  }

}
