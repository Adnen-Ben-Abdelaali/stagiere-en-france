import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixDeStagesParSpecialiteComponent } from './choix-de-stages-par-specialite.component';

describe('ChoixDeStagesParSpecialiteComponent', () => {
  let component: ChoixDeStagesParSpecialiteComponent;
  let fixture: ComponentFixture<ChoixDeStagesParSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixDeStagesParSpecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixDeStagesParSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
