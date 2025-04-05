import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGithubComponent } from './list-github.component';

describe('ListGithubComponent', () => {
  let component: ListGithubComponent;
  let fixture: ComponentFixture<ListGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
