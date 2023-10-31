import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonotachyComponent } from './monotachy.component';

describe('MonotachyComponent', () => {
  let component: MonotachyComponent;
  let fixture: ComponentFixture<MonotachyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonotachyComponent]
    });
    fixture = TestBed.createComponent(MonotachyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
