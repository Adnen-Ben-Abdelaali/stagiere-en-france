import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipaleDuStageSelectionneComponent } from './page-principale-du-stage-selectionne.component';

describe('PagePrincipaleDuStageSelectionneComponent', () => {
  let component: PagePrincipaleDuStageSelectionneComponent;
  let fixture: ComponentFixture<PagePrincipaleDuStageSelectionneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePrincipaleDuStageSelectionneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrincipaleDuStageSelectionneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
