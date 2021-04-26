import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';
import { iAlert } from 'src/app/Interfaces/alert.interface';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  public activeAlert?: iAlert;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getAlertSubject()
    .subscribe((newAlert: iAlert) => {
      this.hideAlert();
      this.activeAlert = newAlert;
      this.activeAlert.visible = true;
    });
  }

  public hideAlert(): void {
    if(this.activeAlert != undefined) {
      this.activeAlert.visible = false;
    }
  }
}
