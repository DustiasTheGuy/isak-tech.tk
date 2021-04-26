import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state/state.service';
import { iProject } from 'src/app/Interfaces/all.interfaces';
import { InitialValues } from 'src/app/initial-values';
import { data } from './data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  public projects: iProject[];
  public themeColor: string = InitialValues.themeColorInitial;

  constructor(private stateService: StateService) {
    this.projects = data;
  }

  ngOnInit(): void {
    this.stateService.onPageLoad({
      title: 'Projects',
      subtitle: 'Check out some of my most recent projects that I have been working on, I have more projects \
      available on my github.'
    }); 
    this.stateService.getThemeColorState()
    .subscribe(newColor => this.themeColor = newColor);
  }
}
