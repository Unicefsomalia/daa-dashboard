import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocaletextMyformComponent } from './add-localetext-myform.component';

describe('AddLocaletextMyformComponent', () => {
  let component: AddLocaletextMyformComponent;
  let fixture: ComponentFixture<AddLocaletextMyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLocaletextMyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocaletextMyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
