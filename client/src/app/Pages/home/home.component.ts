import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { data, IData }  from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public data: IData[];

  constructor() {
      this.data = data;
      window.addEventListener('scroll', () => this.elementInView());
  }

  ngOnInit() {
    document.title = 'Isak Tech - Web Developer'
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000 // values from 0 to 3000, with step 50ms
    });
  }

  elementInView() {
    let elements = document.getElementsByClassName('section');
    
    for(let i = 0; i < elements.length; i++) {
      let bounding  = elements[i].getBoundingClientRect();

      let inView = 
      bounding.top >= 0 && bounding.bottom <= 
      (window.innerHeight + this.data[i].offset || document.documentElement.clientHeight + this.data[i].offset);

      if (inView) {
        elements[i].classList.add('animate')
      }
    }
  }
}