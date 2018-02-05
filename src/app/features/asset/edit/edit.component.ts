import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  template: `
    <p>
      edit works! details is: {{ details | json }}
    </p>
    <button (click)="increase.emit({increased: true})">Increase</button>
  `,
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() details = {a: 0};
  @Output() increase = new EventEmitter();
  @Output() foo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
