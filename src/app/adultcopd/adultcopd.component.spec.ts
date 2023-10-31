import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultcopdComponent } from './adultcopd.component';

describe('AdultcopdComponent', () => {
  let component: AdultcopdComponent;
  let fixture: ComponentFixture<AdultcopdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultcopdComponent]
    });
    fixture = TestBed.createComponent(AdultcopdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
