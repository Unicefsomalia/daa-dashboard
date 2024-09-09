import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocaleMyformComponent } from './add-locale-myform.component';

describe('AddLocaleMyformComponent', () => {
  let component: AddLocaleMyformComponent;
  let fixture: ComponentFixture<AddLocaleMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLocaleMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocaleMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
