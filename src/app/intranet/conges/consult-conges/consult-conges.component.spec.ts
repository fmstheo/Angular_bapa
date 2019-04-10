import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCongesComponent } from './consult-conges.component';

describe('ConsultCongesComponent', () => {
  let component: ConsultCongesComponent;
  let fixture: ComponentFixture<ConsultCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
