import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-overview-route',
  templateUrl: './overview-route.component.html',
  styleUrls: ['./overview-route.component.css']
})
export class OverviewRouteComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  id: number;
  posts: any[];

  constructor(private ar: ActivatedRoute, private subSrv: SubjectService) {
      this.subscription = subSrv.getAllData().subscribe(posts => {
        debugger;
          this.posts = posts;
      });
  }

  ngOnInit() {
    this.ar.params.subscribe(p => {
      this.id = p.id;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
