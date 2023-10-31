import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultvfibComponent } from './adultvfib.component';

describe('AdultvfibComponent', () => {
  let component: AdultvfibComponent;
  let fixture: ComponentFixture<AdultvfibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultvfibComponent]
    });
    fixture = TestBed.createComponent(AdultvfibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
