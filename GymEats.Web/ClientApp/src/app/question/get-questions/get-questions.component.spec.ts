import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestionsComponent } from './get-questions.component';

describe('GetQuestionsComponent', () => {
  let component: GetQuestionsComponent;
  let fixture: ComponentFixture<GetQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetQuestionsComponent]
    });
    fixture = TestBed.createComponent(GetQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
