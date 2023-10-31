import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultallergyComponent } from './adultallergy.component';

describe('AdultallergyComponent', () => {
  let component: AdultallergyComponent;
  let fixture: ComponentFixture<AdultallergyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultallergyComponent]
    });
    fixture = TestBed.createComponent(AdultallergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
