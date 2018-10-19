import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardArticleComponent } from './standard-article.component';

describe('StandardArticleComponent', () => {
  let component: StandardArticleComponent;
  let fixture: ComponentFixture<StandardArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
