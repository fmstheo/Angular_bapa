import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionutilisateurComponent } from './gestionutilisateur.component';

describe('GestionutilisateurComponent', () => {
  let component: GestionutilisateurComponent;
  let fixture: ComponentFixture<GestionutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
