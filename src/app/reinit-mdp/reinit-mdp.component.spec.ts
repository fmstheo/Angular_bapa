import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitMdpComponent } from './reinit-mdp.component';

describe('ReinitMdpComponent', () => {
  let component: ReinitMdpComponent;
  let fixture: ComponentFixture<ReinitMdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitMdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
