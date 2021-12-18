import { Component, Input, OnInit } from '@angular/core';
import {
  faArrowRight,
  faTimes,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  rightArrow: IconDefinition = faArrowRight;
  closeIcon: IconDefinition = faTimes;

  @Input() isModelOpen: boolean = false;
}
