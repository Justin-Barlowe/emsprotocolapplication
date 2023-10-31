import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultchfComponent } from './adultchf.component';

describe('AdultchfComponent', () => {
  let component: AdultchfComponent;
  let fixture: ComponentFixture<AdultchfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultchfComponent]
    });
    fixture = TestBed.createComponent(AdultchfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
