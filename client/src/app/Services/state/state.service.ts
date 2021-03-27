import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateService {  
  public pageHeaderSubject = new Subject<boolean>();
  public screenWidthSubject = new Subject<string>();

  constructor() { }

  public updatePageHeaderState(shouldBeSmall: boolean) {
    this.pageHeaderSubject.next(shouldBeSmall);
  }

  public pageHeaderState(): Observable<boolean> {
    return this.pageHeaderSubject.asObservable();
  }

  public updateScreenWidthState(screenWidth: string) {
    this.screenWidthSubject.next(screenWidth);
  }

  public screenWidthState(): Observable<string> {
    return this.screenWidthSubject.asObservable();
  }
}
