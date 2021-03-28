import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { products, iProduct } from './products';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit, OnDestroy {
  public themeColor: string = '';
  public products: iProduct[];
  public modalOpen = false;
  public modalData: any = {
    product: undefined
  };
  constructor(private stateService: StateService) {
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

  strToInt(j: string): number {
    return parseInt(j);
  }

  openModal(product: iProduct) {
    this.modalData.product = product;
    this.modalOpen = true;
  }

  closeModal(e: Event) {
    this.modalOpen = false;
    e.stopPropagation();
  }
}
