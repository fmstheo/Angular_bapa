import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MignonComponent } from './mignon.component';

describe('MignonComponent', () => {
  let component: MignonComponent;
  let fixture: ComponentFixture<MignonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MignonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MignonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
