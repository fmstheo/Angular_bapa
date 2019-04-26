import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesExeptionnelsComponent } from './conges-exeptionnels.component';

describe('CongesExeptionnelsComponent', () => {
  let component: CongesExeptionnelsComponent;
  let fixture: ComponentFixture<CongesExeptionnelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongesExeptionnelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesExeptionnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
