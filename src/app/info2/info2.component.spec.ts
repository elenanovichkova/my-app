import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info2Component } from './info2.component';

describe('Info2Component', () => {
  let component: Info2Component;
  let fixture: ComponentFixture<Info2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
