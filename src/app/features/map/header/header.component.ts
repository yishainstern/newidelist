import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { GoogleautoService } from '../../../core/googleauto/googleauto.service';
import { MapService } from '../../../core/map/map.service';

@Component({
  selector: 'app-map-header',
  template: `
    <header>
      <div class="search-area">
        <div class="search-field" [ngClass]="{'search-field-open':openInput}">
            <input type="text" id="search" (blur)="toggleInput(false)"
            (focus)="toggleInput(true)"  />
            <button class="icon icon-magnify"></button>
        </div>
        <button class="color-grey search-settings" [ngClass]="{'search-field-open':openInput}">
            <div class="icon icon-filter icon-size-small"></div>
            <span class="color-black">הגדרות חיפוש</span>
        </button>
        <button class="color-grey clean-search">נקה הכל</button>
        <button class="color-black icon icon-back go-back icon-size-small"></button>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openInput = false;
  t = null;
  googlePlaceLib = false;
  autocomplete: any;
  adressObj: any;
  latLonObg: any;
  constructor(private autoService: GoogleautoService, private mapservice: MapService ) { }

  ngOnInit() {
    this.startautocomplete();
    this.autoService.cast.subscribe(place => this.changePlace(place));
  }
  googleTimer() {
    setTimeout( () => this.startautocomplete(), 1000);
  }
  changePlace(place) {
  }
  startautocomplete() {
    this.autocomplete = this.autoService.generateAutoCompleteElm('search');
    if (this.autocomplete === false) {
      this.googleTimer();
    } else {
      this.autoService.addListenerForPickPlce(this.autocomplete, this.changePlace);
      console.log('google is here');
    }
  }
  toggleInput(flag) {
    this.openInput = flag;
  }

}
