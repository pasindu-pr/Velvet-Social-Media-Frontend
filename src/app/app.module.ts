import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppInputComponent } from './shared/app-input/app-input.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { UserComponent } from './shared/user/user.component';
import { PostModalComponent } from './posts/post-modal/post-modal.component';
import { ReactionsAreaComponent } from './shared/reactions-area/reactions-area.component';
import { NewsComponent } from './news/news.component';
import { NewsDescriptionComponent } from './news/news-description/news-description.component';
import { NewsItemComponent } from './news/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppInputComponent,
    PostCreateComponent,
    PostsComponent,
    PostComponent,
    UserComponent,
    PostModalComponent,
    ReactionsAreaComponent,
    NewsComponent,
    NewsDescriptionComponent,
    NewsItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
