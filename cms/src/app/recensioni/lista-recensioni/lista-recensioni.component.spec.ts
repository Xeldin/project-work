import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecensioniComponent } from './lista-recensioni.component';

describe('ListaRecensioniComponent', () => {
  let component: ListaRecensioniComponent;
  let fixture: ComponentFixture<ListaRecensioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRecensioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRecensioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
