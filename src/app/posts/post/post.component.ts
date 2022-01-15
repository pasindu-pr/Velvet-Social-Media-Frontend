import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/shared/Models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() postContent: string;
  @Input() postImage: IPhoto[];
  @Input() location: string;
  @Input() likesCount: number;
  @Input() commentsCount: number;
  @Input() sharesCount: number;
  @Input() createdAt: string;

  @Input() username: string;
  @Input() userProfilePic: string;

  // Shared Post Items
  @Input() isShared: boolean;
  @Input() sharedUserUsername: string;
  @Input() sharedUserProfilePic: string;
  @Input() sharedTime: string;
  @Input() sharedText: string;

  getImageLink() {
    return this.postImage[0] ? this.postImage[0].image_link : '';
  }
}
