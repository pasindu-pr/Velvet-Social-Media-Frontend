import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDescriptionComponent } from './news/news-description/news-description.component';
import { NewsComponent } from './news/news.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
