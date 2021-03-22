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
  }

  ngOnInit() {
    document.title = 'Isak Tech - Web Developer'
    AOS.init();
  }
}