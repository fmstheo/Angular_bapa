import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeCongesComponent } from './demande-de-conges.component';

describe('DemandeDeCongesComponent', () => {
  let component: DemandeDeCongesComponent;
  let fixture: ComponentFixture<DemandeDeCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDeCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDeCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
