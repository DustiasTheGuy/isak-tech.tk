import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  public isTop: boolean = true;
  public threshHold: number = 75;
  public menuIsOpen: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', 
    () => this.isTop = window.scrollY <= this.threshHold ? true : false);
  }
}
