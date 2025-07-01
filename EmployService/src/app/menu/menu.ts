import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
