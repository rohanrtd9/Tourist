import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateExamComponent } from './admin-create-exam.component';

describe('AdminCreateExamComponent', () => {
  let component: AdminCreateExamComponent;
  let fixture: ComponentFixture<AdminCreateExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreateExamComponent]
    });
    fixture = TestBed.createComponent(AdminCreateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
