import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FriendsComponent } from './user-profile/friends/friends.component';
import { ProfileSummaryComponent } from './user-profile/profile-summary/profile-summary.component';
import { PhotosComponent } from './user-profile/photos/photos.component';
import { PhotoComponent } from './user-profile/photos/photo/photo.component';
import { FriendComponent } from './user-profile/friends/friend/friend.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotificationComponent } from './header/notification/notification.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './redux/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LocationEffects } from './redux/effects/location.effects';
import { LoginEffects } from './redux/effects/login.effects';
import { AppLoadingComponent } from './shared/app-loading/app-loading.component';

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
    UserProfileComponent,
    FriendsComponent,
    ProfileSummaryComponent,
    PhotosComponent,
    PhotoComponent,
    FriendComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent,
    AppLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LocationEffects, LoginEffects]),
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
