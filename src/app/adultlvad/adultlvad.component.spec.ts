import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultlvadComponent } from './adultlvad.component';

describe('AdultlvadComponent', () => {
  let component: AdultlvadComponent;
  let fixture: ComponentFixture<AdultlvadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultlvadComponent]
    });
    fixture = TestBed.createComponent(AdultlvadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
