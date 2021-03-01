import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  public counter: number = 5;

  constructor(
    private router: Router,
    private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.updatePageHeaderState(true);

    setTimeout(() => {
      this.router.navigate(['/'])
    }, this.counter * 1000)

    setInterval(() => {
      this.counter -= 1;
    }, 1000)
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }
}
