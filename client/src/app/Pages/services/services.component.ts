import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {

  constructor(
    private stateService: StateService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.stateService.updatePageHeaderState(true);
    this.titleService.setTitle('Isak Tech - Services')
  }

  ngOnDestroy() {
    this.stateService.updatePageHeaderState(false);
  }

}
