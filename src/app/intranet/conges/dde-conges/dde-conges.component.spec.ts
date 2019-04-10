import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdeCongesComponent } from './dde-conges.component';

describe('DdeCongesComponent', () => {
  let component: DdeCongesComponent;
  let fixture: ComponentFixture<DdeCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdeCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdeCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
