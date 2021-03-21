import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WindowRef } from './Services/state/window';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ServicesComponent } from './Pages/services/services.component';
import { TopNavigationComponent } from './Components/top-navigation/top-navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageHeaderComponent } from './Components/page-header/page-header.component';
import { PostComponent } from './Pages/post/post.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { BreadcrumbsComponent } from './Components/breadcrumbs/breadcrumbs.component';
import { PostsIndexComponent } from './Pages/posts-index/posts-index.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { NewsletterSignupComponent } from './Pages/newsletter-signup/newsletter-signup.component';
import { PrivacyPComponent } from './Pages/privacy-p/privacy-p.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    TopNavigationComponent,
    FooterComponent,
    PageHeaderComponent,
    PostComponent,
    SideMenuComponent,
    BreadcrumbsComponent,
    PostsIndexComponent,
    ProjectsComponent,
    NewsletterSignupComponent,
    PrivacyPComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ WindowRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
