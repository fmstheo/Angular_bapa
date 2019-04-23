import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeProjetComponent } from './gestion-de-projet.component';

describe('GestionDeProjetComponent', () => {
  let component: GestionDeProjetComponent;
  let fixture: ComponentFixture<GestionDeProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDeProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
