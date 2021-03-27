import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})

export class TopNavigationComponent implements OnInit {
  public menuIsOpen: boolean = false;
  public hamburgerColor: string = '#fff';

  constructor(private router: Router) {
    // this.router.events.subscribe(e => {
    //   if(e instanceof NavigationEnd)
    //   this.menuIsOpen = false;
    //   return;
    // });

    window.addEventListener('scroll', (e) => this.initColor());
  }

  ngOnInit(): void {
    this.initColor();
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
