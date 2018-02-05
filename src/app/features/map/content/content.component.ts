import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <app-map-area></app-map-area>
  `,
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
