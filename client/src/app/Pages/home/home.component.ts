import { Component, OnInit } from '@angular/core';
import { data, IData }  from './data';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public data: IData[];
  public themeColor: string = '';

  constructor(private stateService: StateService) {
      this.data = data;
      window.addEventListener('scroll', () => this.elementInView());
  }

  ngOnInit() {
    document.title = 'Isak Tech - Web Developer'
    this.stateService.themeColorState()
    .subscribe(newColor => this.themeColor = newColor);
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

  isMobile(): boolean {
    console.log(window.innerWidth >= 768)
    return false;
  }
}