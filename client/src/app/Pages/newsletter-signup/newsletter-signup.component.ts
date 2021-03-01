import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss']
})
export class NewsletterSignupComponent implements OnInit, OnDestroy {
  public email: string;
  public formConfig = {
    email: '',
    fullName: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private stateService: StateService) {
    this.email = '';
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.formConfig.email = params.e || '';
      this.formConfig.fullName = params.n || '';
    });
    
    this.titleService.setTitle('Isak Tech - News Letter');
    this.stateService.updatePageHeaderState(true);
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }

  submit(): void {

  }
}
