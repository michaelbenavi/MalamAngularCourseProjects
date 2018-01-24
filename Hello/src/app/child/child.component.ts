import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { ShowMyAgePipe } from '../shared/pipes/show-my-age.pipe';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  date: Date = new Date();
  @Input() users: any;
  @Output() childSelected = new EventEmitter<any>();

  ngOnInit() {
  }

  updateParent(data) {
    const name: string = new ShowMyAgePipe().transform(26, 'Me');
    this.childSelected.emit(name);
  }

}
