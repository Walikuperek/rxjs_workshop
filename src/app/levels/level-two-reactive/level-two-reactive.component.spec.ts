import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoReactiveComponent } from './level-two-reactive.component';

describe('LevelTwoReactiveComponent', () => {
  let component: LevelTwoReactiveComponent;
  let fixture: ComponentFixture<LevelTwoReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelTwoReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelTwoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
