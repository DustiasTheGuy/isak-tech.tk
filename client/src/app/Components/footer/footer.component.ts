import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public themeColor: string = '';

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getThemeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }
}
