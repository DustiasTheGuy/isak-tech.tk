import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpService } from 'src/app/Services/http/http.service';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/Services/state/state.service';
import { InitialValues } from 'src/app/initial-values';
import { iPost, iHttpResponse } from 'src/app/Interfaces/all.interfaces';

@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html',
  styleUrls: ['./posts-index.component.scss'],
  providers: [ DatePipe ]
})
export class PostsIndexComponent implements OnInit {
  public data!: iPost[];
  public pageTitle?: string;
  public render: boolean = false;
  public categories: string[] = InitialValues.categoriesInitial;

  constructor(
    private datePipe: DatePipe,
    private stateService: StateService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => 
    this.getPosts(params.category));
    this.stateService.onPageLoad();
  }

  getPosts(category?: string) {
    this.pageTitle = category != undefined && this.categories.includes(category) ? category : 'Recent Posts';
    this.stateService.setPageHeaderState({ 
      title: this.pageTitle
    });


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
