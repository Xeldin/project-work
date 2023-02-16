import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesDetailsComponent } from './videogames-details.component';

describe('VideogamesDetailsComponent', () => {
  let component: VideogamesDetailsComponent;
  let fixture: ComponentFixture<VideogamesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogamesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogamesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
