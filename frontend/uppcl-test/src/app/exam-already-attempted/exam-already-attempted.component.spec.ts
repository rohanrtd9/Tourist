import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAlreadyAttemptedComponent } from './exam-already-attempted.component';

describe('ExamAlreadyAttemptedComponent', () => {
  let component: ExamAlreadyAttemptedComponent;
  let fixture: ComponentFixture<ExamAlreadyAttemptedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamAlreadyAttemptedComponent]
    });
    fixture = TestBed.createComponent(ExamAlreadyAttemptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
