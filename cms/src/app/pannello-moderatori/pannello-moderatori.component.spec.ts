import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelloModeratoriComponent } from './pannello-moderatori.component';

describe('PannelloAdminComponent', () => {
  let component: PannelloModeratoriComponent;
  let fixture: ComponentFixture<PannelloModeratoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PannelloModeratoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PannelloModeratoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
