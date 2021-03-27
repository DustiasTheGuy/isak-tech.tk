import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from './Services/state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  public contentWidth: string = '';
  
  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.screenWidthState()
    .subscribe(newState => this.contentWidth = newState);
  }

  ngOnDestroy() {
    this.stateService.updateScreenWidthState('');
  }
}
