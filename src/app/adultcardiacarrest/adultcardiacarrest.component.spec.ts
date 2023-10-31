import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultcardiacarrestComponent } from './adultcardiacarrest.component';

describe('AdultcardiacarrestComponent', () => {
  let component: AdultcardiacarrestComponent;
  let fixture: ComponentFixture<AdultcardiacarrestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultcardiacarrestComponent]
    });
    fixture = TestBed.createComponent(AdultcardiacarrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
