import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeManagerComponent } from './liste-manager.component';

describe('ListeManagerComponent', () => {
  let component: ListeManagerComponent;
  let fixture: ComponentFixture<ListeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
