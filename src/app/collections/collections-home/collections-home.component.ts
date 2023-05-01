import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    {
      name: 'Jerry',
      age: 34,
      job: 'Designer',
      employed: true,
    },
    {
      name: 'John',
      age: 30,
      job: 'Ui/UxDesigner',
      employed: true,
    },
    {
      name: 'James',
      age: 26,
      job: 'Cinematographer',
      employed: false,
    },
    {
      name: 'Jane',
      age: 22,
      job: 'Student',
      employed: false,
    },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' },
  ];
}
