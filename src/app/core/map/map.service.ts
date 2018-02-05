import { Injectable } from '@angular/core';
import {} from '@types/googlemaps';
import { Observable, BehaviorSubject } from 'rxjs';
declare var MarkerClusterer: any;
@Injectable()
export class MapService {
  private markersarray = new BehaviorSubject<any>('none');
  cast = this.markersarray.asObservable();
  constructor() { }
  startMap(id, lat, lng, zoom) {
    try {
      const tmp_map = new google.maps.Map(document.getElementById(id), {
        center: {lat: lat, lng: lng},
        zoom: zoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      return tmp_map;
    } catch (e) {
      return false;
    }
  }
  centerMap(place, in_map) {
    if (place.lat && place.lng) {
      in_map.setCenter(place);
    }
  }
  markerwithnomap(lat, lan) {
    const latLng = new google.maps.LatLng(lat, lan);
    const marker = new google.maps.Marker({ position: latLng});
    return marker;
  }
  clustermarkers(array, latPropertiy, lanpropertiy) {
    if (Array.isArray && array.length > 0) {
      let markerArray = [];
      for (let i = 0; i < array.length; i ++) {
        const cuurent = array[i];
        if (cuurent[latPropertiy] && cuurent[lanpropertiy]) {
          const mark = this.markerwithnomap(parseFloat(cuurent[latPropertiy]), parseFloat(cuurent[lanpropertiy]));
          markerArray.push(mark);
        }
      }
      this.markersarray.next(markerArray);
    }
  }
  stratcluster(mapObj, markers, cluster) {
    if (cluster && cluster.clearMarkers) {
      cluster.clearMarkers();
    }
    if (mapObj) {
      const cc = new MarkerClusterer(mapObj, markers);
      return cc;
    }
  }
}
