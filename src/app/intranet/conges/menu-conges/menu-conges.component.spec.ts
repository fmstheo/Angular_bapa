import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCongesComponent } from './menu-conges.component';

describe('MenuCongesComponent', () => {
  let component: MenuCongesComponent;
  let fixture: ComponentFixture<MenuCongesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCongesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
