import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedeuxComponent } from './pagedeux.component';

describe('PagedeuxComponent', () => {
  let component: PagedeuxComponent;
  let fixture: ComponentFixture<PagedeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
