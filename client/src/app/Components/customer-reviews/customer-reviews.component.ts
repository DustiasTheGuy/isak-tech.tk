import { Component, OnInit } from '@angular/core';
import { InitialValues } from 'src/app/initial-values';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit {
  public reviews: any[] = InitialValues.customerReviewsInitial;

  public carouselOptions = {
    controls: false,
    dots: true,
    autoPlay: true,
    autoPlaySpeed: 5000,
    transitionDuration: 1500
  };

  public cData = {
    autoPlayIncrement: 1,
    active: 0,
    itemWidth: 1200
  };

  constructor() {
    window.addEventListener('resize', () => this.setWidth());
  }

  ngOnInit(): void {
    this.setWidth();

    if(this.carouselOptions.autoPlay) {
      this.autoPlay();
    }
  }

  private autoPlay(): void {
    setInterval(() => {
      if(this.cData.active >= this.reviews.length - 1) {
        this.cData.autoPlayIncrement = -1;
      }

      if(this.cData.active <= 0) {
        this.cData.autoPlayIncrement = 1;
      }

      this.cData.active += this.cData.autoPlayIncrement;
    }, this.carouselOptions.autoPlaySpeed);
  }


  setWidth() {
    this.cData.itemWidth = document.getElementById('container')?.getBoundingClientRect().width || 1200;
  }

  calcMarginLeft(index: number): string {
    if(index === this.cData.active) {
      return ''; 
    
    } else if(index < this.cData.active) {
      let marginLeft = (this.cData.active - index) * this.cData.itemWidth; 
      return `-${marginLeft}px`;

    } else if(index > this.cData.active) {
      let marginLeft = (this.cData.active - index) * this.cData.itemWidth;
      return `${(~marginLeft + 1) + this.cData.itemWidth}px`;
    }

    return '';
  }
}
