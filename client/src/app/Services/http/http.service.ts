import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iHttpResponse } from '../../Interfaces/http.interface';
import { iFormFields } from '../../Interfaces/form-fields.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private production: boolean = true;
  private serverAddr: string;
  private headerToken: string = '5a02e4042cab4a50a491dbbc117a415756c8362a8014dabd5472ef77278503b9';

  constructor(private httpClient: HttpClient) {
    this.serverAddr = this.production ? 'https://www.isak-tech.tk' : 'http://localhost:8081';
  }

  private headerTokenSetup() {
    return { headers: { authorization: this.headerToken } }
  }

  public getPosts(): Observable<iHttpResponse> {
    return this.httpClient.get<iHttpResponse>(this.serverAddr + '/get-posts', this.headerTokenSetup() );
  }

  public getPost(id: number): Observable<iHttpResponse> {
    return this.httpClient.get<iHttpResponse>(this.serverAddr + '/get-post/' + id, this.headerTokenSetup());
  }

  public getSideMenuData(): Observable<iHttpResponse> {
    return this.httpClient.get<iHttpResponse>(this.serverAddr + '/side-menu', this.headerTokenSetup());
  }

  public contact(formData: iFormFields): Observable<iHttpResponse> {
    return this.httpClient.post<iHttpResponse>(this.serverAddr + '/contact', formData, this.headerTokenSetup());
  }

  public metaData(): Observable<iHttpResponse> {
    return this.httpClient.get<iHttpResponse>(this.serverAddr + '/meta-data', this.headerTokenSetup());
  }
}  
