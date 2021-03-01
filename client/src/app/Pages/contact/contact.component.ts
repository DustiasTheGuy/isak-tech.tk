import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iFormFields } from '../../Interfaces/form-fields.interface';
import { HttpService } from '../../Services/http/http.service';
import { iHttpResponse } from '../../Interfaces/http.interface';
import { Title } from '@angular/platform-browser';
import { StateService } from '../../Services/state/state.service';
import { ValidationService } from '../../Services/validation/validation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit, OnDestroy {
  public formFields: iFormFields = { inquiry: '', fullName: '', email: '', message: '' }
  public messages: any = { message: 'Example Message', show: false, error: false }
  public btnDisabled: boolean = false;

  constructor(
    private router: Router,
    private stateService: StateService,
    private validationService: ValidationService,
    private titleService: Title,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.titleService.setTitle('Isak Tech - Contact')
    this.stateService.updatePageHeaderState(true);
    this.activatedRoute.queryParams.subscribe(params => 
    this.formFields.inquiry = this.formSetup(params.card))
    document.getElementById('fullName')?.focus();
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }

  formSetup(card?: string): string {
    switch(card) {
      case '1': return 'General Programming & Development';
      case '2': return 'Website Development & Design';
      case '3': return 'Server Deployment & Development';
      default: return 'Other';
    }
  }

  validateForm(): any {    

    if(!this.validationService.emailValidation(this.formFields.email.toLowerCase())) {
      document.getElementById('email')?.focus();
      return this.messages = { message: 'Invalid Email', show: true, error: true }
      
    } else if(!this.validationService.strNotEmpty(this.validationService.upperCaseFirstLetter(this.formFields.fullName))) {
      document.getElementById('fullName')?.focus();
      return this.messages = { message: 'Missing Field - Full Name', show: true, error: true }

    } else if(!this.validationService.strNotEmpty(this.formFields.message)) {
      document.getElementById('message')?.focus();
      return this.messages = { message: 'Missing Field - Message', show: true, error: true }

    } else if(this.formFields.message.length <= 25) {
      return this.messages = { message: 'Message too short. Minimum 25 characters', show: true, error: true }

    } else {
      return this.contact()
    }
  }


  contact(): void { // send form data to server
    this.btnDisabled = true;
    this.formFields.fullName = this.validationService.upperCaseFirstLetter(this.formFields.fullName.toLowerCase());
    this.formFields.email = this.formFields.email.toLowerCase();

    this.httpService.contact(this.formFields)
    .subscribe((response: iHttpResponse) => {
        this.messages = !response.success 
        ? this.messages = { message: response.message, show: true, error: true }
        : this.messages = { message: response.message, show: true, error: false }
  
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
