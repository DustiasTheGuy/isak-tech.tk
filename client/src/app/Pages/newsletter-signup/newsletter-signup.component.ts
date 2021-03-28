import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss']
})

export class NewsletterSignupComponent implements OnInit, OnDestroy {
  public email: string;
  public themeColor: string = '';
  public formConfig = {
    email: '',
    fullName: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private stateService: StateService) {
    this.email = '';
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.formConfig.email = params.e || '';
      this.formConfig.fullName = params.n || '';
    });
    
    document.title = 'Isak Tech - News Letter';
    this.stateService.updatePageHeaderState(true);
    this.stateService.themeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }

  submit(): void {

  }
}
