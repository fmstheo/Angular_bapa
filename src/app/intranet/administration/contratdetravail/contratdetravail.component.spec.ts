import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratdetravailComponent } from './contratdetravail.component';

describe('ContratdetravailComponent', () => {
  let component: ContratdetravailComponent;
  let fixture: ComponentFixture<ContratdetravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratdetravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratdetravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
