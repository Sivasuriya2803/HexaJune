import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployShow } from './employ-show/employ-show';
import { EmployAdd } from './employ-add/employ-add';
import { EmployDelete } from './employ-delete/employ-delete';
import { EmployUpdate } from './employ-update/employ-update';
import { EmploySearch } from './employ-search/employ-search';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployShow,EmployAdd,EmploySearch,EmployDelete,EmployUpdate,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EmployCrud';
}
