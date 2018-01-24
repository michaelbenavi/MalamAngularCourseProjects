import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  users: any[]  = [
    {
      name: 'David',
      age: 28
    },
    {
      name: 'Moshe',
      age: 25
    },
    {
      name: 'Kobi',
      age: 22
    }
];

  name: string = 'NewMichael' ;

  clickMe() {
    this.users.push({
      name: this.name,
      age: 25
    });
  }

  showChild(data) {
    alert(data);
  }

}
