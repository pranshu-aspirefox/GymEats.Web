import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDietListComponent } from './get-diet-list.component';

describe('GetDietListComponent', () => {
  let component: GetDietListComponent;
  let fixture: ComponentFixture<GetDietListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDietListComponent]
    });
    fixture = TestBed.createComponent(GetDietListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
