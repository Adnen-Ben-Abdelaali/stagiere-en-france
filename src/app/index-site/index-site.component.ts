import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-site',
  templateUrl: './index-site.component.html',
  styleUrls: ['./index-site.component.css',

    'assets/BootstrapDependencies/bootstrap.min.css',

    'assets/StylingCss/styleStagiereEnFrance.css'

  ]
})
export class IndexSiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
