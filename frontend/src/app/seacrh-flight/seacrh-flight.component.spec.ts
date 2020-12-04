import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhFlightComponent } from './seacrh-flight.component';

describe('SeacrhFlightComponent', () => {
  let component: SeacrhFlightComponent;
  let fixture: ComponentFixture<SeacrhFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeacrhFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeacrhFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
