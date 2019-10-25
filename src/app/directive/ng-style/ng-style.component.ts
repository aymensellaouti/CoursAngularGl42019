import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  bg = 'yellow';
  color = 'red';
  font = 'Garamond';
  size = 20;
  constructor() { }

  ngOnInit() {
  }

}
