import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateService {  
  public pageHeaderSubject = new Subject<boolean>();
  public themeColorSubject = new BehaviorSubject<string>('rgb(32, 93, 206)');

  constructor() { }

  public updatePageHeaderState(shouldBeSmall: boolean): void {
    this.pageHeaderSubject.next(shouldBeSmall);
  }

  public pageHeaderState(): Observable<boolean> {
    return this.pageHeaderSubject.asObservable();
  }

  public updateThemeColorState(newColor: string): void {
    this.themeColorSubject.next(newColor);
  }

  public themeColorState(): Observable<string> {
    return this.themeColorSubject.asObservable();
  }
}
