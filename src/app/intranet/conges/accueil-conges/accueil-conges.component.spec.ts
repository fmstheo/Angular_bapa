import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCongesComponent } from './accueil-conges.component';

describe('AccueilCongesComponent', () => {
  let component: AccueilCongesComponent;
  let fixture: ComponentFixture<AccueilCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
