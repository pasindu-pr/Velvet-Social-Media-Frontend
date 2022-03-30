import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NewsDescriptionComponent } from './news/news-description/news-description.component';
import { NewsComponent } from './news/news.component';
import { PeopleComponent } from './people/people.component';
import { PostsComponent } from './posts/posts.component';
import { CurrentUserPageComponent } from './shared/user-profile-pages/current-user-page/current-user-page.component';
import { UserPageComponent } from './shared/user-profile-pages/user-page/user-page.component';
import { FriendsComponent } from './user-profile/friends/friends.component';
import { PhotosComponent } from './user-profile/photos/photos.component';
import { ProfileEditComponent } from './user-profile/profile-edit/profile-edit.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDescriptionComponent },
  { path: 'myaccount', component: CurrentUserPageComponent },
  { path: 'myaccount/photos', component: PhotosComponent },
  { path: 'myaccount/friends', component: FriendsComponent },
  { path: 'myaccount/people', component: PeopleComponent },
  { path: 'myaccount/edit', component: ProfileEditComponent },
  { path: 'users/:id', component: UserPageComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
