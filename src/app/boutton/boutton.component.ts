import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.css']
})
export class BouttonComponent implements OnInit {

  isHidden = false;
  @Input() message = 'Cacher';
  @Output() sendDataToFather = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  showHide() {
    this.isHidden = ! this.isHidden;
    const messageToFather = `Je vais ${this.message} le paragraphe`;
    (this.message === 'Cacher') ? this.message = 'Afficher' : this.message = 'Cacher';
    this.sendDataToFather.emit(messageToFather);
  }

}
