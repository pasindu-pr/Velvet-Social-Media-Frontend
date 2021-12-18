import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'social-media-site-frontend';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router);
  }
}
