import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultbradycardiaComponent } from './adultbradycardia.component';

describe('AdultbradycardiaComponent', () => {
  let component: AdultbradycardiaComponent;
  let fixture: ComponentFixture<AdultbradycardiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultbradycardiaComponent]
    });
    fixture = TestBed.createComponent(AdultbradycardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
