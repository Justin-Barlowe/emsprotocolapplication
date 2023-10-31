import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugassistedComponent } from './drugassisted.component';

describe('DrugassistedComponent', () => {
  let component: DrugassistedComponent;
  let fixture: ComponentFixture<DrugassistedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugassistedComponent]
    });
    fixture = TestBed.createComponent(DrugassistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
