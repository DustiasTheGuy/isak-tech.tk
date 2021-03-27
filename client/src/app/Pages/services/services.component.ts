import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { WindowRef } from '../../Services/state/window';
import { shopifyOptions } from './shopify';
import { storeDetails, productIDs, iStoreDetails } from './store-details';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit, OnDestroy {
  private shopifyBuy: any;
  private productsIDs: string[];

  constructor(private winRef: WindowRef, private stateService: StateService) {
    this.shopifyBuy = this.winRef.nativeWindow.ShopifyBuy;    
    this.productsIDs = productIDs;

    window.innerWidth >= 768 ? 
    this.stateService.updateScreenWidthState('80%') :
    this.stateService.updateScreenWidthState('100%');
  }

  ngOnInit(): void {    
    document.title = 'Isak Tech - Services';
    this.stateService.updatePageHeaderState(true);
    this.initShopify(this.shopifyBuy.buildClient(storeDetails));
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
    this.stateService.updateScreenWidthState('');
  }

  initShopify(client: iStoreDetails): void {
    this.shopifyBuy.UI.onReady(client).then((ui: any) => 
    this.productsIDs.forEach(id => 
      ui.createComponent('product', { 
        id: id, 
        node: document.getElementById('product-component-' + id), 
        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr', 
        options: shopifyOptions(id)
    })));
  }
}
