import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGitRepoBlockChainComponent } from './my-git-repo-block-chain.component';

describe('MyGitRepoBlockChainComponent', () => {
  let component: MyGitRepoBlockChainComponent;
  let fixture: ComponentFixture<MyGitRepoBlockChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGitRepoBlockChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGitRepoBlockChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
