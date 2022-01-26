import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'header component title';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(): void {

  }
}
