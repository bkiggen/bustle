import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalArticlesComponent } from './horizontal-articles.component';

describe('HorizontalArticlesComponent', () => {
  let component: HorizontalArticlesComponent;
  let fixture: ComponentFixture<HorizontalArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
