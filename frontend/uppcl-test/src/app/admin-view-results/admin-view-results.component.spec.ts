import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewResultsComponent } from './admin-view-results.component';

describe('AdminViewResultsComponent', () => {
  let component: AdminViewResultsComponent;
  let fixture: ComponentFixture<AdminViewResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewResultsComponent]
    });
    fixture = TestBed.createComponent(AdminViewResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
