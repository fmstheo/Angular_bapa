import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonEspaceComponent } from './mon-espace.component';

describe('MonEspaceComponent', () => {
  let component: MonEspaceComponent;
  let fixture: ComponentFixture<MonEspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonEspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
