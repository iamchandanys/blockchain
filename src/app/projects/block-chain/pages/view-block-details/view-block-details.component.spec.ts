import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlockDetailsComponent } from './view-block-details.component';

describe('ViewBlockDetailsComponent', () => {
  let component: ViewBlockDetailsComponent;
  let fixture: ComponentFixture<ViewBlockDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBlockDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
