import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOptionListComponent } from './get-option-list.component';

describe('GetOptionListComponent', () => {
  let component: GetOptionListComponent;
  let fixture: ComponentFixture<GetOptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOptionListComponent]
    });
    fixture = TestBed.createComponent(GetOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
