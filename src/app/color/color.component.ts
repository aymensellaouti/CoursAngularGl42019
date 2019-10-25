import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = 'red';
  defaultColor = 'yellow';
  constructor() { }

  ngOnInit() {
  }
  changeColor(couleur) {
    console.log(couleur);
    this.color = couleur;
  }
  resetDefaultColor() {
    this.color = this.defaultColor;
  }

}
