import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmployeComponent } from './user-employe.component';

describe('UserEmployeComponent', () => {
  let component: UserEmployeComponent;
  let fixture: ComponentFixture<UserEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
