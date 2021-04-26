import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { iPageHeaderConfig } from 'src/app/Interfaces/header-config.interface';
import { iAlert } from 'src/app/Interfaces/alert.interface';
import { InitialValues } from 'src/app/initial-values';

@Injectable({
  providedIn: 'root'
})

export class StateService {  
  private pageHeaderSubject = new BehaviorSubject<iPageHeaderConfig>(InitialValues.pageHeaderInitial);
  private themeColorSubject = new BehaviorSubject<string>(InitialValues.themeColorInitial);
  private alertSubject = new Subject<iAlert>();

  constructor() { }

  public setPageHeaderState(pageHeaderConfig: iPageHeaderConfig): void {
    this.pageHeaderSubject.next(pageHeaderConfig);
  }

  public getPageHeaderState(): Observable<iPageHeaderConfig> {
    return this.pageHeaderSubject.asObservable();
  }

  public setThemeColorState(newColor: string): void {
    this.themeColorSubject.next(newColor);
  }

  public getThemeColorState(): Observable<string> {
    return this.themeColorSubject.asObservable();
  }
  
  public setAlertSubject(newState: iAlert): void {
    this.alertSubject.next(newState);
  }

  public getAlertSubject(): Observable<iAlert> {
    return this.alertSubject.asObservable();
  }

  public onPageLoad(pageHeaderConfig?: iPageHeaderConfig) {
    let pageTitle: string = window.location.hash.replace('#', '').replace('/', '').replace('?id=', ' ');
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.substring(1, pageTitle.length);
    this.setPageHeaderState(pageHeaderConfig || { title: pageTitle.length > 0 ? pageTitle : 'Home' });
  }
}
