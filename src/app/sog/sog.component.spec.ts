import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SogComponent } from './sog.component';

describe('SogComponent', () => {
  let component: SogComponent;
  let fixture: ComponentFixture<SogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SogComponent]
    });
    fixture = TestBed.createComponent(SogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
