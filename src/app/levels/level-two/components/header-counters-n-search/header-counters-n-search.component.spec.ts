import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCountersNSearchComponent } from './header-counters-n-search.component';

describe('HeaderCountersNSearchComponent', () => {
  let component: HeaderCountersNSearchComponent;
  let fixture: ComponentFixture<HeaderCountersNSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCountersNSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCountersNSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
