import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamLiveComponent } from './exam-live.component';

describe('ExamLiveComponent', () => {
  let component: ExamLiveComponent;
  let fixture: ComponentFixture<ExamLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamLiveComponent]
    });
    fixture = TestBed.createComponent(ExamLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
