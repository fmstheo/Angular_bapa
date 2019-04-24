import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestashopComponent } from './prestashop.component';

describe('PrestashopComponent', () => {
  let component: PrestashopComponent;
  let fixture: ComponentFixture<PrestashopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestashopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestashopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
