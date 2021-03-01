import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../../Services/state/state.service';
import { SlideShowData } from './slide-show.data';

declare interface iSlideShow {
  url: string;
  active: boolean;
  textClass: string;
  btnClass: string;
}

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {
  public showContent: boolean = false;
  public pageHeaderState: boolean = false;
  public bgImage: number = 0;
  public playing: boolean = true;
  public slideShowSpeed: number = 2 * 1000;
  public bgImages: iSlideShow[] = SlideShowData;


  constructor(private router: Router, private stateService: StateService) {
    router.events.subscribe((value: any) => {
      this.toggleContent();
    });
  }

  ngOnInit(): void {
    this.stateService.pageHeaderState()
    .subscribe(newState => this.pageHeaderState = newState);

    this.imgSlider();
  }

  toggleContent(): void {
    this.showContent = false;

    setTimeout(() => {
      this.showContent = true;
    }, 200)
  } 


  imgSlider(): void {
    setInterval(() => {
      if(this.playing && !this.pageHeaderState) {
        if(this.bgImage >= this.bgImages.length - 1) {
          this.bgImage = 0;
          this.bgImages[0].active = true;
          this.bgImages[this.bgImages.length - 1].active = false;

        } else {
          this.bgImages[this.bgImage].active = false;
          this.bgImages[this.bgImage + 1].active = true;
          this.bgImage++;
        }
      }

    }, this.slideShowSpeed);
  }

  scrollDown(): void {
    document.getElementById('main')?.scrollIntoView({ 
      block: 'start'
    });

    window.scrollBy(0, - 56); // 0 - navbar height
  }
}
