import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBootstrapStyleComponent } from './login-bootstrap-style.component';

describe('LoginBootstrapStyleComponent', () => {
  let component: LoginBootstrapStyleComponent;
  let fixture: ComponentFixture<LoginBootstrapStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBootstrapStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBootstrapStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
