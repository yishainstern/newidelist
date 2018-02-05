import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../core/map/map.service';
import {Observable} from "rxjs";
import { GoogleautoService } from '../../../core/googleauto/googleauto.service';
@Component({
  selector: 'app-map-area',
  template: `
    <div class="map-area">
      <div class="hlalf">
        <div class="cAlSi" id="{{idmap}}"></div>
      </div>
    </div>
  `,
  styleUrls: ['./map-area.component.scss']
})
export class MapAreaComponent implements OnInit {

  constructor(private mapservice: MapService, private autoService: GoogleautoService) { }
  idmap = 'map';
  mapObj = null;
  cluster = null;
  ngOnInit() {
    this.initmap();
    this.autoService.addressObservable.subscribe(address => this.getaddress(address));
    this.autoService.locationObservable.subscribe(location => this.getalocation(location));
    this.mapservice.cast.subscribe(marks => this.startcluster(marks));
  }
  startcluster(marks) {
    this.cluster = this.mapservice.stratcluster(this.mapObj, marks, this.cluster);
  }
  googleTimer() {
    setTimeout( () => this.initmap(), 1000);
  }
  initmap() {
    this.mapObj = this.mapservice.startMap(this.idmap, 32.087771, 34.803579, 16);
    if (this.mapObj === false) {
      this.googleTimer();
    }
  }
  getaddress(adress) {
  }
  getalocation(location) {
    this.mapservice.centerMap(location, this.mapObj);
  }
}
