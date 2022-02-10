import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOneReactiveComponent } from './level-one-reactive.component';

describe('LevelOneReactiveComponent', () => {
  let component: LevelOneReactiveComponent;
  let fixture: ComponentFixture<LevelOneReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelOneReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOneReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
