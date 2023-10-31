import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolytachyComponent } from './polytachy.component';

describe('PolytachyComponent', () => {
  let component: PolytachyComponent;
  let fixture: ComponentFixture<PolytachyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolytachyComponent]
    });
    fixture = TestBed.createComponent(PolytachyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
