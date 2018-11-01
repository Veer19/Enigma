import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comic3Component } from './comic3.component';

describe('Comic3Component', () => {
  let component: Comic3Component;
  let fixture: ComponentFixture<Comic3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comic3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
