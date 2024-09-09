import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocaleMytablesComponent } from './list-locale-mytables.component';

describe('ListLocaleMytablesComponent', () => {
  let component: ListLocaleMytablesComponent;
  let fixture: ComponentFixture<ListLocaleMytablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLocaleMytablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLocaleMytablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
