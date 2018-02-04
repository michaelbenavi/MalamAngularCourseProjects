import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubjectService {

  public subject = new Subject<any>();
  array: any[] = [];
  constructor() { }

  updateData(data: any) {
    data.forEach(element => {
      this.array.push(element);
    });
    this.subject.next(this.array);
  }

  removeAtID(id) {
    this.array.filter(x => x !== id);
    this.subject.next(this.array);
  }

  getAllData(): Observable<any> {
    return this.subject.asObservable();
  }

}
