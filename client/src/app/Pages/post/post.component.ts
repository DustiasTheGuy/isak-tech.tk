import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../Services/http/http.service';
import { iHttpResponse } from '../../Interfaces/http.interface';
import { iObjectImage } from '../../Interfaces/image-object.interface';
import { iPost } from '../../Interfaces/post.interface';
import { Title } from '@angular/platform-browser';
import { StateService } from '../../Services/state/state.service';
import { initialValueImg, initialValuePost } from './initial-value';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, OnDestroy {
  public data: iPost;
  public selectedImg: iObjectImage;

  constructor(
    private stateService: StateService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute, 
    private httpService: HttpService) {
      this.selectedImg = initialValueImg
      this.data = initialValuePost
    }


  ngOnInit(): void {
    this.stateService.updatePageHeaderState(true);
    this.titleService.setTitle('Isak Tech - Article')

    window.scrollTo({ top: 0, left: 0 });
    this.activatedRoute.queryParams
    .subscribe(params => this.getPost(params.id))
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }

  getPost(id: number): void {
    this.httpService.getPost(id)
    .subscribe((response: iHttpResponse) => {
      this.data = response.success ? response.data : null;
      this.selectedImg.url = response.data.thumbnail;
      this.data.images.push({ date: new Date(), id: 0, post_id: 0, thumbnail: 1, url: response.data.thumbnail })
    });

  }
}
