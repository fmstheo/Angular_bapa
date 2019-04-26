import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuchatComponent } from './menuchat.component';

describe('MenuchatComponent', () => {
  let component: MenuchatComponent;
  let fixture: ComponentFixture<MenuchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
