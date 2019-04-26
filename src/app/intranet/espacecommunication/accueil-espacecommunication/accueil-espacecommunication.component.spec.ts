import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEspacecommunicationComponent } from './accueil-espacecommunication.component';

describe('AccueilEspacecommunicationComponent', () => {
  let component: AccueilEspacecommunicationComponent;
  let fixture: ComponentFixture<AccueilEspacecommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilEspacecommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilEspacecommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
