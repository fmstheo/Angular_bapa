import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageuneComponent } from './pageune.component';

describe('PageuneComponent', () => {
  let component: PageuneComponent;
  let fixture: ComponentFixture<PageuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
