import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprendreAapprendreComponent } from './apprendre-aapprendre.component';

describe('ApprendreAapprendreComponent', () => {
  let component: ApprendreAapprendreComponent;
  let fixture: ComponentFixture<ApprendreAapprendreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprendreAapprendreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprendreAapprendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
