import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionManagerComponent } from './gestion-manager.component';

describe('GestionManagerComponent', () => {
  let component: GestionManagerComponent;
  let fixture: ComponentFixture<GestionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
