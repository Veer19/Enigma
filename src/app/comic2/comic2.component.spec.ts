import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comic2Component } from './comic2.component';

describe('Comic2Component', () => {
  let component: Comic2Component;
  let fixture: ComponentFixture<Comic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
