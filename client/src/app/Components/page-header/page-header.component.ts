import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {
  public showContent: boolean = false;
  public pageHeaderState: boolean = false;
  public pageTitle?: string;
  public fillColor: string = '#205dce';
  public colorPickerOpen: boolean = false;

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
    this.stateService.updateThemeColorState(this.fillColor);

    setTimeout(() => 
    this.emitColor(this.fillColor), 1000)
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

  scrollDown(): void {
    document.getElementById('main')?.scrollIntoView({ 
      block: 'start'
    });

    window.scrollBy(0, - 56); // 0 - navbar height
  }

  bgImageSetup() {
    return `url(${ !this.pageHeaderState ? '/assets/full_size.svg' : '/assets/half_size.svg' })`;
  }

  emitColor(color: string) {
    this.fillColor = color;
    this.stateService.updateThemeColorState(color);
  }
}
