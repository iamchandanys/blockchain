import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangKnownComponent } from './lang-known.component';

describe('LangKnownComponent', () => {
  let component: LangKnownComponent;
  let fixture: ComponentFixture<LangKnownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangKnownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangKnownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
