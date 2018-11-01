import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToPhoneComponent } from './back-to-phone.component';

describe('BackToPhoneComponent', () => {
  let component: BackToPhoneComponent;
  let fixture: ComponentFixture<BackToPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
