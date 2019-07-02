import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlexComponent } from './display-flex.component';

describe('DisplayFlexComponent', () => {
  let component: DisplayFlexComponent;
  let fixture: ComponentFixture<DisplayFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
