import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceComponent } from './espace.component';

describe('EspaceComponent', () => {
  let component: EspaceComponent;
  let fixture: ComponentFixture<EspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
