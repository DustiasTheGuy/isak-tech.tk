import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor() { }

  public emailValidation(str: string): boolean {
    return this.emailRegex.test(str)
  }

  public strNotEmpty(str: string): boolean {
    return !(str === null || str === '');
  }

  public upperCaseFirstLetter(str: string) {
    let completeStr: string = '';

    str.split(' ')
    .forEach((subStr, index) => index === 0 ?
    completeStr += subStr[0].toUpperCase() +  subStr.slice(1, subStr.length) + ' ' :
    completeStr += subStr[0].toUpperCase() +  subStr.slice(1, subStr.length));
  
    return completeStr;
  }
}
