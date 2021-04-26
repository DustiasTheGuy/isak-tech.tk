import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public counter: number = 5;

  constructor(
    private router: Router,
    private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.onPageLoad();

    setTimeout(() => {
      this.router.navigate(['/'])
    }, this.counter * 1000)

    setInterval(() => {
      this.counter -= 1;
    }, 1000)
  }
}
