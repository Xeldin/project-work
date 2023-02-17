import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecensioniComponent } from './form-recensioni.component';

describe('FormRecensioniComponent', () => {
  let component: FormRecensioniComponent;
  let fixture: ComponentFixture<FormRecensioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecensioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecensioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
