import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultasystoleComponent } from './adultasystole.component';

describe('AdultasystoleComponent', () => {
  let component: AdultasystoleComponent;
  let fixture: ComponentFixture<AdultasystoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultasystoleComponent]
    });
    fixture = TestBed.createComponent(AdultasystoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
