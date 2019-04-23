import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitsInformatiqueComponent } from './droits-informatique.component';

describe('DroitsInformatiqueComponent', () => {
  let component: DroitsInformatiqueComponent;
  let fixture: ComponentFixture<DroitsInformatiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitsInformatiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitsInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
