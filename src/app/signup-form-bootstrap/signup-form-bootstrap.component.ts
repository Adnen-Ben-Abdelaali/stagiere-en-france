import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form-bootstrap',
  templateUrl: './signup-form-bootstrap.component.html',
  styleUrls: ['./signup-form-bootstrap.component.css',

    'assets/BootstrapDependencies/bootstrap.min.css',

    'assets/StylingCss/styleStagiereEnFrance.css',

    "assets/StylingCss/stylesBootstrapSignUpForm.css"

  ]
})
export class SignupFormBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
