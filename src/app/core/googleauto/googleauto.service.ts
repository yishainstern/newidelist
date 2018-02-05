import { Injectable } from '@angular/core';
import {} from '@types/googlemaps';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GoogleautoService {
  private place = new BehaviorSubject<any>('none');
  private address = new BehaviorSubject<any>('none');
  private location = new BehaviorSubject<any>('none');
  addressObservable = this.address.asObservable();
  locationObservable = this.location.asObservable();
  cast = this.place.asObservable();
  diction = {
    city: 'locality'
  };
  constructor() { }
  generateAutoCompleteElm(id) {
    try {
      const ans = new google.maps.places.Autocomplete(<HTMLInputElement> document.getElementById(id));
      return ans;
    } catch (e) {
      return false;
    }
  }
  addListenerForPickPlce(autoObj, callback) {
    const d = this;
    autoObj.addListener('place_changed', function() {
      const currentPlace = autoObj.getPlace();
      const ansAdress = d.extractComponent(currentPlace);
      const ansLocation = d.pointFromPlace(currentPlace);
      d.address.next(ansAdress);
      d.location.next(ansLocation);
      // d.place.next(currentPlace);
    });
  }
  pointFromPlace(place) {
    if (!place.geometry) {
      return false;
    } else {
      return {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
    }
  }
  extractComponent(places) {
    const ans = {city: '', street: '', street_num: '', neighbothood: ''};
    if (places && places.address_components && Array.isArray(places.address_components)) {
      const arr = places.address_components;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].types && (arr[i].types).indexOf(this.diction.city) >= 0 && !ans.city) {
          ans.city = arr[i].long_name;
        }
      }
    }
    return ans;
  }
}
