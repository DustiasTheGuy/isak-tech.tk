import { Component, OnInit } from '@angular/core';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})

export class TopNavigationComponent implements OnInit {
  public menuIsOpen: boolean = false;
  public hamburgerColor: string = '#fff';
  public themeColor: string = '';

  constructor(private stateService: StateService) {
    window.addEventListener('scroll', (e) => this.initColor());
  }

  ngOnInit(): void {
    this.initColor();
    this.stateService.themeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }

  initColor(): void {
    if(this.menuIsOpen) {
      this.hamburgerColor = '#333';
      return;
    } 

    let pageHeader = document.getElementById('page-header') as HTMLElement;
    this.hamburgerColor = window.scrollY + 70 >= 
    pageHeader.getBoundingClientRect().height ? '#333' : '#fff';
  }

  openMenu(): void {
    this.menuIsOpen = !this.menuIsOpen ? true : false;
    this.initColor();
  }

  onNavigation(): void {
    this.menuIsOpen = false;
    this.initColor();
  }
}
