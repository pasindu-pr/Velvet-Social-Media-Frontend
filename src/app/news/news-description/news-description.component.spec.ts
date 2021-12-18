import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDescriptionComponent } from './news-description.component';

describe('NewsDescriptionComponent', () => {
  let component: NewsDescriptionComponent;
  let fixture: ComponentFixture<NewsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
