import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comic1Component } from './comic1.component';

describe('Comic1Component', () => {
  let component: Comic1Component;
  let fixture: ComponentFixture<Comic1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comic1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
