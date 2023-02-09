import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVideogamesComponent } from './form-videogames.component';

describe('FormVideogamesComponent', () => {
  let component: FormVideogamesComponent;
  let fixture: ComponentFixture<FormVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVideogamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
