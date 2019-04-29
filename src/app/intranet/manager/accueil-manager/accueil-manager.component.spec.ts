import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilManagerComponent } from './accueil-manager.component';

describe('AccueilManagerComponent', () => {
  let component: AccueilManagerComponent;
  let fixture: ComponentFixture<AccueilManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
