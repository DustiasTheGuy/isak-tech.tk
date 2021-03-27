import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { data, IProject } from './data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit, OnDestroy {
  public projects: IProject[];

  constructor(private stateService: StateService) {
    this.projects = data;
  }

  ngOnInit(): void {
    document.title = 'Isak Tech - Projects';
    this.stateService.updatePageHeaderState(true);
  }

  ngOnDestroy() {
    this.stateService.updatePageHeaderState(false);
  }
}
