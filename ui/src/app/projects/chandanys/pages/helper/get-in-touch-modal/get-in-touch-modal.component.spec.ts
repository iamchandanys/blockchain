import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchModalComponent } from './get-in-touch-modal.component';

describe('GetInTouchModalComponent', () => {
  let component: GetInTouchModalComponent;
  let fixture: ComponentFixture<GetInTouchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInTouchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
