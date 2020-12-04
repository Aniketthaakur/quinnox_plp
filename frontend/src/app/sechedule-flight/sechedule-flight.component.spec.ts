import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecheduleFlightComponent } from './sechedule-flight.component';

describe('SecheduleFlightComponent', () => {
  let component: SecheduleFlightComponent;
  let fixture: ComponentFixture<SecheduleFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecheduleFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecheduleFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
