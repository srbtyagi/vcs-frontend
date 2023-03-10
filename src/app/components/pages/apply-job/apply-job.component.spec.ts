import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApplyJobComponent } from "./apply-job.component";

describe("ApplyJobComponent", () => {
  let component: ApplyJobComponent;
  let fixture: ComponentFixture<ApplyJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyJobComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
