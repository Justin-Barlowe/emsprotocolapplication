import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresusComponent } from './postresus.component';

describe('PostresusComponent', () => {
  let component: PostresusComponent;
  let fixture: ComponentFixture<PostresusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostresusComponent]
    });
    fixture = TestBed.createComponent(PostresusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
