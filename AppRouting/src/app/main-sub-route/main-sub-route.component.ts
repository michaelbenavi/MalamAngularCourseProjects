import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-main-sub-route',
  templateUrl: './main-sub-route.component.html',
  styleUrls: ['./main-sub-route.component.css']
})
export class MainSubRouteComponent implements OnInit, OnDestroy {
  id: number;
  sub: any;

  constructor(private route: ActivatedRoute, private http: Http,
              private subSrv: SubjectService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
  }
  getPosts() {
    this.callGet()
    .subscribe(res => {
      debugger;
      this.subSrv.updateData(res);
    }, err => {
      alert('ERROR');
     });
  }
  callGet(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
    .map(respose => respose.json());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
