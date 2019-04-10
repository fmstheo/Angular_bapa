import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesExceptionnelsComponent } from './conges-exceptionnels.component';

describe('CongesExceptionnelsComponent', () => {
  let component: CongesExceptionnelsComponent;
  let fixture: ComponentFixture<CongesExceptionnelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongesExceptionnelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesExceptionnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
