import { Component, OnInit } from '@angular/core';
import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news-description',
  templateUrl: './news-description.component.html',
  styleUrls: ['./news-description.component.scss'],
})
export class NewsDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  heartIcon: IconDefinition = faHeart;
}
