import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGitRepoComponent } from './my-git-repo.component';

describe('MyGitRepoComponent', () => {
  let component: MyGitRepoComponent;
  let fixture: ComponentFixture<MyGitRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGitRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGitRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
