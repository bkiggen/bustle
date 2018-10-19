import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveArticleComponent } from './exclusive-article.component';

describe('ExclusiveArticleComponent', () => {
  let component: ExclusiveArticleComponent;
  let fixture: ComponentFixture<ExclusiveArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
