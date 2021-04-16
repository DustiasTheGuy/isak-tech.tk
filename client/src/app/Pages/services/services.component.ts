import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { products, iProduct } from './products';
import { HttpService } from '../../Services/http/http.service';
import { ValidationService } from '../../Services/validation/validation.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit, OnDestroy {
  public themeColor: string = '';
  public products: iProduct[];
  public modalOpen = false;
  public email: string = '';
  public alert: any = {
    show: false,
    message: '',
    color: ''
  };
  public modalData: any = {
    product: undefined
  };

  constructor(
    private validationService: ValidationService,
    private stateService: StateService, 
    private httpService: HttpService) {
    this.products = products;
  }

  ngOnInit(): void {    
    this.stateService.themeColorState()
    .subscribe(newColor => this.themeColor = newColor);

    document.title = 'Isak Tech - Services';
    this.stateService.updatePageHeaderState(true);
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }

  openModal(product: iProduct) {
    this.modalData.product = product;
    this.modalOpen = true;
  }

  closeModal(e: Event) {
    this.modalOpen = false;
    e.stopPropagation();
  }
 
  submit() {
    this.alert = { show: false, color: '', message: '' }

    if(!this.validationService.emailValidation(this.email)) {
      this.alert = { show: true, class: 'error', message: `You've entered an invalid email` }

    } else {
      this.httpService.placeOrder({ email: this.email })
      .subscribe(response => response.success 
      ? this.alert = { show: true, class: 'success', message: 'Your order has been placed, I will get back to you shortly.'}
      : this.alert = { show: true, class: 'error', message: 'An internal server error has occured, please try again'});
    }

    setTimeout(() => {
      this.alert.show = false;
      this.email = '';
    }, 5000);
  }
}
