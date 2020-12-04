import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerAllDetailsComponent } from './view-customer-all-details.component';

describe('ViewCustomerAllDetailsComponent', () => {
  let component: ViewCustomerAllDetailsComponent;
  let fixture: ComponentFixture<ViewCustomerAllDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerAllDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
