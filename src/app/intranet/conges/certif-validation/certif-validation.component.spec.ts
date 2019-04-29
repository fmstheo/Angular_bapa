import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifValidationComponent } from './certif-validation.component';

describe('CertifValidationComponent', () => {
  let component: CertifValidationComponent;
  let fixture: ComponentFixture<CertifValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
