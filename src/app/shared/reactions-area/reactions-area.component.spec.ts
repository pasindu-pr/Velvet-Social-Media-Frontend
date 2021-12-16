import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionsAreaComponent } from './reactions-area.component';

describe('ReactionsAreaComponent', () => {
  let component: ReactionsAreaComponent;
  let fixture: ComponentFixture<ReactionsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
