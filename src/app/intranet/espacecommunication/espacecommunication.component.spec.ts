import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacecommunicationComponent } from './espacecommunication.component';

describe('EspacecommunicationComponent', () => {
  let component: EspacecommunicationComponent;
  let fixture: ComponentFixture<EspacecommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacecommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacecommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
