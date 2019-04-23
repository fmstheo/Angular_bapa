import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnglaisComponent } from './anglais.component';

describe('AnglaisComponent', () => {
  let component: AnglaisComponent;
  let fixture: ComponentFixture<AnglaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnglaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnglaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
