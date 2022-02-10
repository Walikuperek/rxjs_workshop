import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelThreeReactiveComponent } from './level-three-reactive.component';

describe('LevelThreeReactiveComponent', () => {
  let component: LevelThreeReactiveComponent;
  let fixture: ComponentFixture<LevelThreeReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelThreeReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelThreeReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
