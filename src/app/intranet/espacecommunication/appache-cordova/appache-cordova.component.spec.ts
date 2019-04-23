import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppacheCordovaComponent } from './appache-cordova.component';

describe('AppacheCordovaComponent', () => {
  let component: AppacheCordovaComponent;
  let fixture: ComponentFixture<AppacheCordovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppacheCordovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppacheCordovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
