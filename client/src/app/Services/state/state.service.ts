import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {  
  public pageHeaderSubject = new Subject<boolean>();


  constructor() { }

  public updatePageHeaderState(shouldBeSmall: boolean) {
    this.pageHeaderSubject.next(shouldBeSmall);
  }

  public pageHeaderState(): Observable<any> {
    return this.pageHeaderSubject.asObservable();
  }

}
