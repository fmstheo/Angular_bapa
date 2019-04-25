import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStagiareComponent } from './user-stagiare.component';

describe('UserStagiareComponent', () => {
  let component: UserStagiareComponent;
  let fixture: ComponentFixture<UserStagiareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStagiareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStagiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
