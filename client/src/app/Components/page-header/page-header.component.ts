import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';
import { iPageHeaderConfig } from 'src/app/Interfaces/header-config.interface';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {
  public titleParts: string[] = [];
  public showContent: boolean = false;
  public pageHeaderState: iPageHeaderConfig = { title: 'Page Title' };
  public fillColor: string = '#205dce';
  public colorPickerOpen: boolean = false;
  public colors: string[] = [
    '#205dce',
    '#3b3b3b',
    '#eb4034',
    '#32a852'
  ];

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getPageHeaderState()
      .subscribe(newState => {
        this.pageHeaderState = newState;
        this.pageHeaderState.title = this.pageHeaderState.title?.replace('Posts?category=', '')

        document.title = `Isak Granqvist - ${this.pageHeaderState.title}`;

        this.titleParts = this.pageHeaderState.title?.split('') || [];
      });

    this.stateService.setThemeColorState(this.fillColor);
    let color = localStorage.getItem('color');
    if (color != null) {
      this.fillColor = color;
    }

    setTimeout(() => this.emitColor(this.fillColor), 0);
  }

  bgImageSetup(): string {
    return `url(${!this.pageHeaderState ? '/assets/full_size.svg' : '/assets/half_size.svg'})`;
  }

  emitColor(color: string): void {
    this.fillColor = color;
    this.stateService.setThemeColorState(color);
    localStorage.setItem('color', color);
  }

  getThemeColor() {
    if (this.pageHeaderState.theme != undefined) {
      return this.pageHeaderState.theme.text_color;
    };

    return '#333';
  }

  setupTheme() {
    return {
      'color': this.fillColor,
      'height': this.pageHeaderState.layout?.height,
      'border-bottom': this.pageHeaderState.layout?.bottom_border
    }
  }
}
