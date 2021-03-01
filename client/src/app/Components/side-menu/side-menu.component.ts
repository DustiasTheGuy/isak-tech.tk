import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http/http.service';
import { iHttpResponse } from '../../Interfaces/http.interface';
import { StateService } from '../../Services/state/state.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements OnInit {
  public loading: boolean = true;
  public groups: any[] = [];
  public menuOpen: boolean = false;

  constructor(
    private stateService: StateService,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getSideMenuData()
    .subscribe((response: iHttpResponse) => 
    this.groups = response.data, (err) => 
    console.log('err'), () => this.loading = false);

  }
}

