import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-privacy-p',
  templateUrl: './privacy-p.component.html',
  styleUrls: ['./privacy-p.component.scss']
})
export class PrivacyPComponent implements OnInit, OnDestroy {

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.updatePageHeaderState(true);
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }
}
