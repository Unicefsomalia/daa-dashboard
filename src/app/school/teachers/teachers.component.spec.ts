import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachersComponent } from './teachers.component';

describe('TeachersComponent', () => {
  let component: TeachersComponent;
  let fixture: ComponentFixture<TeachersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [TeachersComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(TeachersComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TeachersComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
