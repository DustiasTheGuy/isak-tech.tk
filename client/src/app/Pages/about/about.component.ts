import { Component, OnInit } from '@angular/core';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor(
    private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.onPageLoad();
  }
}
