import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprterminationComponent } from './cprtermination.component';

describe('CprterminationComponent', () => {
  let component: CprterminationComponent;
  let fixture: ComponentFixture<CprterminationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CprterminationComponent]
    });
    fixture = TestBed.createComponent(CprterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
