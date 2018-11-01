import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneLevelComponent } from './phone-level.component';

describe('PhoneLevelComponent', () => {
  let component: PhoneLevelComponent;
  let fixture: ComponentFixture<PhoneLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
