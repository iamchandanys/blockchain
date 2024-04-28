import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineTransactionComponent } from './mine-transaction.component';

describe('MineTransactionComponent', () => {
  let component: MineTransactionComponent;
  let fixture: ComponentFixture<MineTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
