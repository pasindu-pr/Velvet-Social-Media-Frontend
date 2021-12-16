import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
})
export class AppInputComponent implements OnInit {
  constructor() {}

  @Input() inputType: string = 'text';
  @Input() icon: IconDefinition = null as any;
  @Input() usedComponent: string = '';
  @Input() placeholder: string = '';

  ngOnInit(): void {}
}
