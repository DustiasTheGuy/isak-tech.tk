import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';
import { _image } from 'src/app/Interfaces/all.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public themeColor: string = '';
  public myTechnologies: _image[] = [
    { src: '/assets/icons/nodejs.svg', alt: 'Nodejs Logo' },
    { src: '/assets/icons/go.svg', alt: 'Golang Logo' },
    { src: '/assets/icons/mongodb.svg', alt: 'MongoDB Logo' },
    { src: '/assets/icons/mysql.svg', alt: 'MySQL Logo' },
    { src: '/assets/icons/angular.svg', alt: 'Angular Logo' },
    { src: '/assets/icons/vue.svg', alt: 'Vuejs Logo' }
  ];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.onPageLoad({
      title: 'Isak Granqvist',
      subtitle: 'According to the SBA, only 64% of small businesses have a website. Are you one of those? Then you should hire me!',
      button: {
        show: true,
        text: 'hire me',
        href: '/services'
      },
      image: { 
        src: '/assets/images/page_headers/pexels-andy-vu-3244513.png', 
        alt: 'Snowy Image' 
      },
      theme: { 
        text_color: '#fff' 
      },
      layout: {
        height: '100vh',
        bottom_border: 'none'
      }
    });
    this.stateService.getThemeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }
}