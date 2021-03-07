import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../../Services/state/state.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute) {
      // window.addEventListener('scroll', (e) => {});
  }

  ngOnInit() {
    this.titleService.setTitle('Isak Tech - Web Developer')
    AOS.init();
  }
}