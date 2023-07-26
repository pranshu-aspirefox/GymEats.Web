import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserDetailsComponent } from './getuser-details.component';

describe('GetuserDetailsComponent', () => {
  let component: GetuserDetailsComponent;
  let fixture: ComponentFixture<GetuserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetuserDetailsComponent]
    });
    fixture = TestBed.createComponent(GetuserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
