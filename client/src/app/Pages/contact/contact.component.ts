import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iFormFields } from 'src/app/Interfaces/form-fields.interface';
import { HttpService } from 'src/app/Services/http/http.service';
import { iHttpResponse } from 'src/app/Interfaces/http.interface';
import { StateService } from 'src/app/Services/state/state.service';
import { ValidationService } from 'src/app/Services/validation/validation.service';
import { InitialValues } from 'src/app/initial-values';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  public formFields: iFormFields = InitialValues.contactFormInitial;
  public btnDisabled: boolean = false;
  public themeColor: string = '';

  constructor(
    private router: Router,
    private stateService: StateService,
    private validationService: ValidationService,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.stateService.onPageLoad();
    
    this.activatedRoute.queryParams.subscribe(params => 
    this.formFields.inquiry = this.formSetup(params.card))
    document.getElementById('fullName')?.focus();
    this.stateService.getThemeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }


  private formSetup(card?: string): string {
    switch(card) {
      case '1': return 'General Programming & Development';
      case '2': return 'Website Development & Design';
      case '3': return 'Server Deployment & Development';
      default: return 'Other';
    }
  }

  public validateForm(): any {    

    if(!this.validationService.emailValidation(this.formFields.email.toLowerCase())) {
      document.getElementById('email')?.focus();
      return this.stateService.setAlertSubject({ type: 'warning', message: 'Invalid Email' });
      
    } else if(!this.validationService.strNotEmpty(this.validationService.upperCaseFirstLetter(this.formFields.fullName))) {
      document.getElementById('fullName')?.focus();
      return this.stateService.setAlertSubject({ type: 'error', message: 'Missing Field - Full Name' });

    } else if(!this.validationService.strNotEmpty(this.formFields.message)) {
      document.getElementById('message')?.focus();
      return this.stateService.setAlertSubject({ type: 'error', message: 'Missing Field - Message' });

    } else if(this.formFields.message.length <= 25) {
      return this.stateService.setAlertSubject({ type: 'error', message: 'Message too short. Minimum 25 characters' });

    } else {
      return this.contact()
    }
  }


  private contact(): void { // send form data to server
    this.btnDisabled = true;
    this.formFields.fullName = this.validationService.upperCaseFirstLetter(this.formFields.fullName.toLowerCase());
    this.formFields.email = this.formFields.email.toLowerCase();

    this.httpService.contact(this.formFields)
    .subscribe((response: iHttpResponse) => {
        this.stateService.setAlertSubject({ type: response.success ? 'success' : 'error', message: response.message });

        if(response.success) {
          setTimeout(() => this.router.navigate(["/news-letter"], { 
            queryParams: { 
              n: this.formFields.fullName,
              e: this.formFields.email
             }
          }), 3000);
        }

    }, (err) => console.log('err'), () => this.btnDisabled = false)
  }
}
