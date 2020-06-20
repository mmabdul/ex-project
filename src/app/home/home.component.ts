import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
studentList: any;
  constructor() { }

  ngOnInit() {
  }
getstudentList() {
this.studentList = [
  {firstName: 'Moh', lastName: 'Abdul', age: 32, grade: 'A'},
  {firstName: 'Abe', lastName: 'Dagne', age: 32, grade: 'A'},
  {firstName: 'Yoni', lastName: 'Abate', age: 32, grade: 'A'},
  {firstName: 'Ase', lastName: 'Ase', age: 32, grade: 'A'}
];

}
}
