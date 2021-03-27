import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../../Services/state/state.service';
import { SlideShowData, iSlideShow } from './slide-show.data';


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
  public pageTitle?: string;
  public contentWidth: string = '';

  constructor(private router: Router, private stateService: StateService) {
    this.setPageData();
    this.router.events.subscribe((e: any) => {
      this.toggleContent();

      if(e instanceof NavigationEnd)
      this.setPageData();
    });
  }

  ngOnInit(): void {
    this.stateService.pageHeaderState()
    .subscribe(newState => this.pageHeaderState = newState);

    this.stateService.screenWidthState()
    .subscribe(newState => this.contentWidth = newState);
  }

  toggleContent(): void {
    this.showContent = false;

    setTimeout(() => {
      this.showContent = true;
    }, 200)
  } 

  setPageData(): void {
    this.pageTitle = window.location.hash.replace('/', '').replace('#', '').replace('-', '').replace('?id=', ' ');
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

  bgImageSetup() {
    return `url(${ !this.pageHeaderState ? '/assets/full_size.svg' : '/assets/half_size.svg' })`;
  }
}
