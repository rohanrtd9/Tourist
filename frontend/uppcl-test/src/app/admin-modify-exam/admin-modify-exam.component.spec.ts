import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifyExamComponent } from './admin-modify-exam.component';

describe('AdminModifyExamComponent', () => {
  let component: AdminModifyExamComponent;
  let fixture: ComponentFixture<AdminModifyExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModifyExamComponent]
    });
    fixture = TestBed.createComponent(AdminModifyExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
