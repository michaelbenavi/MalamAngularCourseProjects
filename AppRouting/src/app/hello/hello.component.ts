import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string;
  obj = {name: 'Mi' , age: '19'};
  product: number;
  postList: any[];
  constructor(private route: Router, private http: Http) { }

  ngOnInit() {

    this.getPosts()
    .subscribe(res => {

      this.postList = res;
    }, err => {
      alert('ERROR');
     });

  }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .map(respose => respose.json());
  }

  goToByeBye() {
    this.route.navigate(['/goodbye'], { queryParams: this.obj  });
  }

  goToProduct() {
    this.route.navigate([`/products/${this.product}`]);
  }

}
