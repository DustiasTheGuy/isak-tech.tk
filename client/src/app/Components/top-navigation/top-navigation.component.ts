import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})

export class TopNavigationComponent implements OnInit {
  public menuIsOpen: boolean = false;
  public themeColor: string = '';

  constructor(private stateService: StateService) {
  }

  ngOnInit(): void {
    this.stateService.getThemeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }

  openMenu(): void {
    this.menuIsOpen = !this.menuIsOpen ? true : false;
  }

  onNavigation(): void {
    this.menuIsOpen = false;
  }
}
