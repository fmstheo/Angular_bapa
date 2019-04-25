import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEquipeComponent } from './user-equipe.component';

describe('UserEquipeComponent', () => {
  let component: UserEquipeComponent;
  let fixture: ComponentFixture<UserEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
