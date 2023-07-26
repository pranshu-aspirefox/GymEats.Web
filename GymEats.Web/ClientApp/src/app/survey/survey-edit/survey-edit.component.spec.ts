import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditComponent } from './survey-edit.component';

describe('SurveyEditComponent', () => {
  let component: SurveyEditComponent;
  let fixture: ComponentFixture<SurveyEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyEditComponent]
    });
    fixture = TestBed.createComponent(SurveyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
