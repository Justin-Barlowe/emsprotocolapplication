import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdulthypotensionComponent } from './adulthypotension.component';

describe('AdulthypotensionComponent', () => {
  let component: AdulthypotensionComponent;
  let fixture: ComponentFixture<AdulthypotensionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdulthypotensionComponent]
    });
    fixture = TestBed.createComponent(AdulthypotensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
