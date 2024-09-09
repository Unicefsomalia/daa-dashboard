import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResetMyFormComponent } from './admin-reset-my-form.component';

describe('AdminResetMyFormComponent', () => {
  let component: AdminResetMyFormComponent;
  let fixture: ComponentFixture<AdminResetMyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminResetMyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResetMyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
