import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFlightComponent } from './view-all-flight.component';

describe('ViewAllFlightComponent', () => {
  let component: ViewAllFlightComponent;
  let fixture: ComponentFixture<ViewAllFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
