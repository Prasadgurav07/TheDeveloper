import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';   
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {
  fullname='data';
  employee: any = null;   // store 1 employee

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {

    this.api.getEmployee(1).subscribe(res => {
      this.employee = res[0];
      console.log(this.employee);
    });
  }

}