import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfLookupComponent } from './pdf-lookup.component';

describe('PdfLookupComponent', () => {
  let component: PdfLookupComponent;
  let fixture: ComponentFixture<PdfLookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfLookupComponent]
    });
    fixture = TestBed.createComponent(PdfLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
