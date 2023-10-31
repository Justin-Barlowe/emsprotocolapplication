import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdulthypertensionComponent } from './adulthypertension.component';

describe('AdulthypertensionComponent', () => {
  let component: AdulthypertensionComponent;
  let fixture: ComponentFixture<AdulthypertensionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdulthypertensionComponent]
    });
    fixture = TestBed.createComponent(AdulthypertensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
