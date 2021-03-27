import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../Services/http/http.service';
import { iHttpResponse } from '../../Interfaces/http.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements OnInit {
  public loading: boolean = true;
  public groups: any[] = [];
  public menuOpen: boolean = false;
  public dropDown: null | HTMLElement;

  constructor(private httpService: HttpService) {
    this.dropDown = document.getElementById('dropdown');

    window.addEventListener('click', (e) => {
      console.log(this.dropDown);    
    });
  }

  ngOnInit(): void {
    this.httpService.getSideMenuData()
    .subscribe((response: iHttpResponse) => 
    this.groups = response.data, (err) => 
    console.log('err'), () => this.loading = false);

  }
}

