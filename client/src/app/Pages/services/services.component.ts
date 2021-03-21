import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StateService } from '../../Services/state/state.service';
import { WindowRef } from '../../Services/state/window';
import { shopifyOptions } from './shopify';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
  private shopifyBuy: any;
  private products: string[] = [
    '6578619744453',
    '6578619941061',
    '6578619842757'
  ]

  constructor(
    private winRef: WindowRef,
    private stateService: StateService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.stateService.updatePageHeaderState(true);
    this.titleService.setTitle('Isak Tech - Services');
    this.shopifyBuy = this.winRef.nativeWindow.ShopifyBuy;
    this.initShopify();
  }

  ngOnDestroy() {
    this.stateService.updatePageHeaderState(false);
  }


  initShopify() {
    let client = this.shopifyBuy.buildClient({
      domain: 'isaktechstore.tk',
      storefrontAccessToken: 'e8ff278b4bff01392eb0fa0c9f3f777d',
    });

    this.shopifyBuy.UI.onReady(client)
    .then((ui: any) => {
      this.products.forEach(id => {
        ui.createComponent('product', {
          id: id,
          node: document.getElementById('product-component-' + id),
          moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
          options: shopifyOptions(id)
        });
      });
    });
  }
}
