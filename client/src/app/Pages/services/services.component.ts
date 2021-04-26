import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';
import { HttpService } from 'src/app/Services/http/http.service';
import { ValidationService } from 'src/app/Services/validation/validation.service';
import { iProduct } from 'src/app/Interfaces/all.interfaces';
import { products } from './products';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
  public themeColor: string = '';
  public email: string = '';
  public products: iProduct[];
  public modalOpen: boolean = false;
  public modalData: any = { product: undefined };

  constructor(
    private validationService: ValidationService,
    private stateService: StateService, 
    private httpService: HttpService) {
    this.products = products;
  }

  ngOnInit(): void {    
    this.stateService.getThemeColorState()
    .subscribe(newColor => this.themeColor = newColor);
    this.stateService.onPageLoad();
  }

  openModal(product: iProduct): void {
    this.modalData.product = product;
    this.modalOpen = true;
  }

  closeModal(e: Event): void {
    this.modalOpen = false;
    e.stopPropagation();
  }
 
  submit(): void {

    if(!this.validationService.emailValidation(this.email)) {
      this.stateService.setAlertSubject({ type: 'error', message: 'You\'ve entered an invalid email' });
      
    } else {
      this.httpService.placeOrder({ email: this.email })
      .subscribe(response => response.success 
      ? this.stateService.setAlertSubject({ type: 'success', message: 'Your order has been placed, I will get back to you shortly.' })
      : this.stateService.setAlertSubject({ type: 'error', message: 'An internal server error has occured, please try again' }));
    }
  }
}
