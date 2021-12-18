import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormBootstrapComponent } from './signup-form-bootstrap.component';

describe('SignupFormBootstrapComponent', () => {
  let component: SignupFormBootstrapComponent;
  let fixture: ComponentFixture<SignupFormBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
