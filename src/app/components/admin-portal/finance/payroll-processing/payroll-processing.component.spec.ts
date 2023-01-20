import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PayrollProcessingComponent } from "./payroll-processing.component";

describe("PayrollProcessingComponent", () => {
  let component: PayrollProcessingComponent;
  let fixture: ComponentFixture<PayrollProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollProcessingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
