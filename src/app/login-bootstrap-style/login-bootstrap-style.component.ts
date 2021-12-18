import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-bootstrap-style',
  templateUrl: './login-bootstrap-style.component.html',
  styleUrls: ['./login-bootstrap-style.component.css',

    'assets/BootstrapDependencies/bootstrap.min.css',

    'assets/StylingCss/styleStagiereEnFrance.css'

  ]
})
export class LoginBootstrapStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
