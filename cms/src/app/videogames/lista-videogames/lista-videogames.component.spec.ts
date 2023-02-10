import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVideogamesComponent } from './lista-videogames.component';

describe('ListaVideogamesComponent', () => {
  let component: ListaVideogamesComponent;
  let fixture: ComponentFixture<ListaVideogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVideogamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVideogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
