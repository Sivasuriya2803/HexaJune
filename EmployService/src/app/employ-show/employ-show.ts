import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employe } from '../employe';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ-show',
  imports: [CommonModule,FormsModule],
  templateUrl: './employ-show.html',
  styleUrl: './employ-show.css'
})
export class EmployShow {
  employs : Employ[];

  constructor(private _employService : Employe) {
    this._employService.showEmploy().subscribe(x => {
      this.employs = x;
    })
  }

}
