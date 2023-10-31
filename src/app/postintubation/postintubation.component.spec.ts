import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostintubationComponent } from './postintubation.component';

describe('PostintubationComponent', () => {
  let component: PostintubationComponent;
  let fixture: ComponentFixture<PostintubationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostintubationComponent]
    });
    fixture = TestBed.createComponent(PostintubationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
