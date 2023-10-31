import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultchestpainComponent } from './adultchestpain.component';

describe('AdultchestpainComponent', () => {
  let component: AdultchestpainComponent;
  let fixture: ComponentFixture<AdultchestpainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultchestpainComponent]
    });
    fixture = TestBed.createComponent(AdultchestpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
