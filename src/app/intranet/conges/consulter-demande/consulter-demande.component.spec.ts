import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDemandeComponent } from './consulter-demande.component';

describe('ConsulterDemandeComponent', () => {
  let component: ConsulterDemandeComponent;
  let fixture: ComponentFixture<ConsulterDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
