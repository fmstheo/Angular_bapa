import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BapaComponent } from './bapa.component';

describe('BapaComponent', () => {
  let component: BapaComponent;
  let fixture: ComponentFixture<BapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
