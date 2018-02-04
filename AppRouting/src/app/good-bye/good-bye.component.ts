import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-bye',
  templateUrl: './good-bye.component.html',
  styleUrls: ['./good-bye.component.css']
})
export class GoodByeComponent implements OnInit {
  name: any;
 age:  number;
  constructor( private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.name = params.name;
    });

    this.active.queryParams.subscribe(params => {
      this.name = params.name;
      this.age = params.age;
      console.log(params);
    });
  }

}
