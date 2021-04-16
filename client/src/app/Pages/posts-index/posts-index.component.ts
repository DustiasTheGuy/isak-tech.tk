import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../Services/http/http.service';
import { iHttpResponse } from '../../Interfaces/http.interface';
import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../Interfaces/post.interface';
import { Title } from '@angular/platform-browser';
import { StateService } from '../../Services/state/state.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html',
  styleUrls: ['./posts-index.component.scss'],
  providers: [ DatePipe ]
})
export class PostsIndexComponent implements OnInit, OnDestroy {
  public data!: iPost[];
  public pageTitle: string = 'Recent Posts';
  public render: boolean = false;
  public categories: string[] = [
    "Articles",
    "News",
    "Product Reviews",
    "Guides",
    "Uncategorized",
  ];

  constructor(
    private datePipe: DatePipe,
    private stateService: StateService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.stateService.updatePageHeaderState(true);
    this.activatedRoute.queryParams.subscribe(params => 
    this.getPosts(params.category));
  }

  ngOnDestroy(): void {
    this.stateService.updatePageHeaderState(false);
  }

  getPosts(category?: string) {
    this.pageTitle = 
    category != undefined && this.categories.includes(category) ? 
    category : 'Recent Posts';

    this.titleService.setTitle('Isak Tech - ' + this.pageTitle)

    this.httpService.getPosts()
    .subscribe((response: iHttpResponse) => 
    this.data = response.success ? 
    category != undefined && this.categories.includes(category) ? 
    response.data.filter((article: any) => 
    article.category === category) : response.data : null, 
    (err) => console.log('An error occured'), () => this.render = true);

    setTimeout(() => console.log(this.data), 3000)
  }

  formatDate(date: Date) {
    return this.datePipe.transform(date, 'shortDate');
  }
}
