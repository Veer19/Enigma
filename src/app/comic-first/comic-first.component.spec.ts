import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicFirstComponent } from './comic-first.component';

describe('ComicFirstComponent', () => {
  let component: ComicFirstComponent;
  let fixture: ComponentFixture<ComicFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
