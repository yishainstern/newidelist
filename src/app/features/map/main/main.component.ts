import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { GoogleautoService } from '../../../core/googleauto/googleauto.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { GlobalqueryService } from '../../../core/globalquery/globalquery.service';
import { MapService } from '../../../core/map/map.service';
import {} from '@types/googlemaps';
declare var MarkerClusterer: any;
@Component({
  selector: 'app-main',
  template: `
    <div class="main-container">
      <app-map-header ></app-map-header>
      <app-content></app-content>
    </div>
  `,
  styleUrls: [
    './main.component.scss'
  ]
})
export class MainComponent implements OnInit {
  private place = new BehaviorSubject<any>('none');
  private adress = new BehaviorSubject<any>('none');
  constructor(
    private autoService: GoogleautoService,
    private http: HttpClient,
    private globlQuery: GlobalqueryService,
    private mapservice: MapService
  ) { }
  ngOnInit() {
    this.autoService.addressObservable.subscribe(address => this.getaddress(address));
  }
  getaddress(address) {
    let fillters = [];
    let tmp_fill_arr = [];
    if (address.city) {
      const tmp_arr = [
        {
          filterProperty: 'adSettlement',
          filterOperator: '=',
          propertyValue: address.city
        }
      ];
      let tmp_fill = this.globlQuery.buildFilters(tmp_arr);
      // Array<any> 
      tmp_fill_arr = fillters.concat(tmp_fill);
      fillters = tmp_fill_arr;
    }
    const full_query = this.globlQuery.buildfullObj('data-realEstateAds', 200, 1, fillters);
    this.globlQuery.runGlobalQuery(full_query).subscribe(data => this.addmarkers(data));
  }
  addmarkers(data) {
    this.mapservice.clustermarkers(data, 'adAssetLatitude', 'adAssetLongitude');
  }
}
