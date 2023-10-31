import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdulttachycardiaComponent } from './adulttachycardia.component';

describe('AdulttachycardiaComponent', () => {
  let component: AdulttachycardiaComponent;
  let fixture: ComponentFixture<AdulttachycardiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdulttachycardiaComponent]
    });
    fixture = TestBed.createComponent(AdulttachycardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
