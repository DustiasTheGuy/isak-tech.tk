import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http/http.service';
import { iHttpResponse } from 'src/app/Interfaces/http.interface';
import { StateService } from 'src/app/Services/state/state.service';
import { InitialValues } from 'src/app/initial-values';
import { iPost, iObjectImage } from 'src/app/Interfaces/all.interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  public data: iPost = InitialValues.postInitial;
  public selectedImg: iObjectImage = InitialValues.imgObjectInitial;

  constructor(
    private router: Router,
    private stateService: StateService,
    private activatedRoute: ActivatedRoute, 
    private httpService: HttpService) {}


  ngOnInit(): void {
    this.stateService.onPageLoad();
    window.scrollTo({ top: 0, left: 0 });
    this.activatedRoute.queryParams
    .subscribe(params => this.getPost(params.id))
  }

  getPost(id: number): void {
    this.httpService.getPost(id)
    .subscribe((response: iHttpResponse) => {
      if(response.success) {
        this.data = response.data;
        this.selectedImg = this.data.images[0];
        return;
      }

      this.router.navigate(['/posts']);
      return;
    });

  }
}
