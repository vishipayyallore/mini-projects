import { Component } from '@angular/core';

import { IProfessor } from '../interfaces/IProfessor';

@Component({
  selector: 'app-professorv1',
  template: `
              <div class="container rounded shadow first-div">
                <h1>Professor {{professor.name}} (V1)</h1>
                <hr>
                <div>
                  <p>Id: <span>{{professor.professorId}}</span></p>
                  <p>Date Of Join: <span>{{professor.dateOfJoin | date}}</span></p>
                  <p>Salary: <span>{{professor.salary}}</span></p>
                  <p>Is Phd: <span>{{professor.isPhd}}</span></p>
                </div>
              </div>
            `,
  styles: [
    `
    h1 {
      color: #2f5c8e;
    }
    `,
    `
    .first-div {
      background-color: #e0e4e6;
    }
    `,
    `
    p {
      color: #0a60b1;
    }
    `,
    `
    span{
      color: #0a60b1;
      font-weight: bolder;
    }
    `
  ]
})
export class Professorv1Component {

  professor: IProfessor;

  constructor() {
    this.professor = {
      professorId: 1,
      name: 'Shiva',
      dateOfJoin: new Date(),
      salary: 1234.56,
      isPhd: true
    };
  }

}
