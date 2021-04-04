import { Component, OnInit } from '@angular/core';

import { IEmployee } from 'src/app/interfaces/iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  cardTitle: string;
  showPicture: boolean;
  employee: IEmployee;

  constructor() {

    // this.cardTitle = 125;
    this.cardTitle = 'Employee Details';
    this.showPicture = true;
  }

  ngOnInit(): void {

    this.employee = {
      fullName: 'Shiva Sai',
      pictureUrl: 'http://lorempixel.com/400/200/sports/2/',
      department: 'Software',
      age: 25,
      address: {
        street: 'Safilguda',
        city: 'Hyderabad',
        state: 'Telangana'
      }

    };
  }

  togglePicture(): void{

    console.log(this.showPicture ? 'Hiding the picture' : 'Showing the picture');

    this.showPicture = !this.showPicture;
  }

}
