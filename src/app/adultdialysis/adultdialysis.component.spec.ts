import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultdialysisComponent } from './adultdialysis.component';

describe('AdultdialysisComponent', () => {
  let component: AdultdialysisComponent;
  let fixture: ComponentFixture<AdultdialysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultdialysisComponent]
    });
    fixture = TestBed.createComponent(AdultdialysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
