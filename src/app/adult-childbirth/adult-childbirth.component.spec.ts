import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultChildbirthComponent } from './adult-childbirth.component';

describe('AdultChildbirthComponent', () => {
  let component: AdultChildbirthComponent;
  let fixture: ComponentFixture<AdultChildbirthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultChildbirthComponent]
    });
    fixture = TestBed.createComponent(AdultChildbirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
