import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamNavbarComponent } from './exam-navbar.component';

describe('ExamNavbarComponent', () => {
  let component: ExamNavbarComponent;
  let fixture: ComponentFixture<ExamNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamNavbarComponent]
    });
    fixture = TestBed.createComponent(ExamNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
