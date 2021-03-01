import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit, OnDestroy {

  constructor(
    private stateService: StateService,
    private titleService: Title) {}

  ngOnInit(): void {
    this.stateService.updatePageHeaderState(true);
    this.titleService.setTitle('Isak Tech - About')
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }
}
