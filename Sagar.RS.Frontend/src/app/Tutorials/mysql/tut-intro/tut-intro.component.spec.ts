import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutIntroComponent } from './tut-intro.component';

describe('TutIntroComponent', () => {
  let component: TutIntroComponent;
  let fixture: ComponentFixture<TutIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
