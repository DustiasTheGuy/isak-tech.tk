import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from '../../Services/state/state.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public projects: any[] = [
    { title: 'vpnfind.site', description: "This project was an effort at understanding the affiliate marketing space. I discovered the affiliate marketing space through social media and decided to see what's going on there so wanted to create a project related to it.", repo: 'https://github.com/DustiasTheGuy/vpn-finder', selectedImg: 0, images: [
      '/assets/images/project1/github-min.png',
      '/assets/images/project1/sign-up-min.png',
      '/assets/images/project1/sign-in-min.png',
      '/assets/images/project1/vpnfinder-products-min.png',
      '/assets/images/project1/contact-form-min.png',
      '/assets/images/project1/forum-min.png',
      '/assets/images/project1/footer-min.png',
      '/assets/images/project1/add-post-min.png'] 
    },
    { title: 'recipe finder', description: 'I started this project with the idea of making a google for recipes which in retrospect is a pretty bad idea. I put this project on the shelf but decided to feature it here because it has a lot of interesting features and I am satisfied with the outcome.', repo: 'https://github.com/DustiasTheGuy/RecipeBook', selectedImg: 0, images: [
      '/assets/images/project2/github-server-min.png',
      '/assets/images/project2/home-page-min.png',
      '/assets/images/project2/sign-up-min.png',
      '/assets/images/project2/sign-in-min.png',
      '/assets/images/project2/password-reset-min.png',
      '/assets/images/project2/security-min.png',
      '/assets/images/project2/submit-min.png',
      '/assets/images/project2/side-menu-min.png'] 
    },
    { title: 'isak-tech.tk', description: 'I am currently working on this project with the goal of promoting my services. I am learning a lot by working on new projects and I am constantly evolving as a developer. Both on the client and server.', repo: 'https://github.com/DustiasTheGuy/isak-tech.tk', selectedImg: 0, images: [
      '/assets/images/project3/home-min.png', 
      '/assets/images/project3/services-min.png', 
      '/assets/images/project3/server-min.png'] 
    },
  ]
  constructor(
    private titleService: Title,
    private stateService: StateService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Isak Tech - Projects');
    this.stateService.updatePageHeaderState(true);
  }

  ngOnDestroy() {
    this.stateService.updatePageHeaderState(false);
  }
}
