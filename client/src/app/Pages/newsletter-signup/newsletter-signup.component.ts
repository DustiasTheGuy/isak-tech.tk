import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { ActivatedRoute } from '@angular/router';
import { ValidationService } from '../../Services/validation/validation.service';
import { HttpService } from '../../Services/http/http.service';

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
  };
  public alert: any = {
    show: false,
    message: '',
    color: ''
  };

  constructor(
    private validationService: ValidationService,
    private httpService: HttpService,
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
    if(!this.validationService.emailValidation(this.formConfig.email)) {
      this.alert = { show: true, class: 'error', message: `You've entered an invalid email` };

    } else {
      this.httpService.placeOrder({ email: this.formConfig.email })
      .subscribe(response => response.success
      ? this.alert = { show: true, class: 'success', message: `You have joined the mailing list, thank you!` }
      : this.alert = { show: true, class: 'error', message: `An internal server error has occured` });
    }

    setTimeout(() => {
      this.alert.show = false;
      this.formConfig.email = '';
    }, 5000);
  }
}
