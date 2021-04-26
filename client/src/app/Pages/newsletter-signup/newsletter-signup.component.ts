import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';
import { ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/Services/validation/validation.service';
import { HttpService } from 'src/app/Services/http/http.service';
import { InitialValues } from 'src/app/initial-values';

@Component({
  selector: 'app-newsletter-signup',
  templateUrl: './newsletter-signup.component.html',
  styleUrls: ['./newsletter-signup.component.scss']
})

export class NewsletterSignupComponent implements OnInit {
  public email: string;
  public themeColor: string = '';
  public formConfig = InitialValues.newsLetterInitial;

  constructor(
    private validationService: ValidationService,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private stateService: StateService) {
    this.email = '';
  }

  ngOnInit(): void {
    this.stateService.onPageLoad({
      title: 'News Letter',
      image: {
        src: '/assets/images/page_headers/razvan-dumitrasconiu-Dd079V8Letk-unsplash.png',
        alt: 'A few envelopes'
      },
      theme: {
        text_color: '#fff'
      }
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.formConfig.email = params.e || '';
      this.formConfig.fullName = params.n || '';
    });

    this.stateService.getThemeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }

  submit(): void {
    if(!this.validationService.emailValidation(this.formConfig.email)) {
      this.stateService.setAlertSubject({ type: 'error', message: 'Email Validation Failed' });
    } else {
      this.httpService.placeOrder({ email: this.formConfig.email })
      .subscribe(response => {
          this.stateService.setAlertSubject({ type: response.success ? 'success' : 'error', message: response.message });
      })
    }
  }
}
