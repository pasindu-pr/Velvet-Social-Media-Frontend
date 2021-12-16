import { Component, Input, OnInit } from '@angular/core';
import {
  faComment,
  faHeart,
  faShare,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reactions-area',
  templateUrl: './reactions-area.component.html',
  styleUrls: ['./reactions-area.component.scss'],
})
export class ReactionsAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  heartIcon: IconDefinition = faHeart;
  commentsIcon: IconDefinition = faComment;
  shareIcon: IconDefinition = faShare;

  @Input() reactionsCenter: boolean = false;
}
