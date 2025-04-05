import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBlogComponent } from './layout-blog.component';

describe('LayoutBlogComponent', () => {
  let component: LayoutBlogComponent;
  let fixture: ComponentFixture<LayoutBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
