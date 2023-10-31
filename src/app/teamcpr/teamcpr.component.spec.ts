import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamcprComponent } from './teamcpr.component';

describe('TeamcprComponent', () => {
  let component: TeamcprComponent;
  let fixture: ComponentFixture<TeamcprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamcprComponent]
    });
    fixture = TestBed.createComponent(TeamcprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
