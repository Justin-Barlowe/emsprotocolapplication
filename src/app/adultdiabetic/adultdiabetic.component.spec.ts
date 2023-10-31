import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultdiabeticComponent } from './adultdiabetic.component';

describe('AdultdiabeticComponent', () => {
  let component: AdultdiabeticComponent;
  let fixture: ComponentFixture<AdultdiabeticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultdiabeticComponent]
    });
    fixture = TestBed.createComponent(AdultdiabeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
