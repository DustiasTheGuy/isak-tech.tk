import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';

@Component({
  selector: 'app-privacy-p',
  templateUrl: './privacy-p.component.html',
  styleUrls: ['./privacy-p.component.scss']
})
export class PrivacyPComponent implements OnInit {

  constructor(public stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.onPageLoad({
      title: 'Privacy Policy',
      image: {
        src: '/assets/images/page_headers/photo-1461685265823-f8d5d0b08b9b.png',
        alt: ''
      },
      theme: {
        text_color: '#fff'
      }
    });
  }

  scrollTo(target: string): void {
    let element = document.getElementById(target)

    if(element != undefined) {
      element.style.border = '5px dashed #ff4538';
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })

      setTimeout(() => {
        if(element != null) {
          element.style.border = '1px solid rgb(197, 197, 197)';
        }
      }, 5000);

    }
  }
}
