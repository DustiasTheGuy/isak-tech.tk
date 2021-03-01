import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ServicesComponent } from './Pages/services/services.component';
import { PostComponent } from './Pages/post/post.component';
import { PostsIndexComponent } from './Pages/posts-index/posts-index.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { NewsletterSignupComponent } from './Pages/newsletter-signup/newsletter-signup.component';
import { PrivacyPComponent } from './Pages/privacy-p/privacy-p.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'post', component: PostComponent },
  { path: 'posts', component: PostsIndexComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news-letter', component: NewsletterSignupComponent },
  { path: 'privacy', component: PrivacyPComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
