import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = environment.apiUrl;
const queryString = 'globalquery';
@Injectable()
export class GlobalqueryService {
  private apiUrl = environment.apiUrl;  // URL to web api
  constructor(
    private http: HttpClient
  ) { }
  buildFilter(filterProperty, filterOperator, propertyValue) {
    return {
      filterProperty: filterProperty,
      filterOperator: filterOperator,
      propertyValue: propertyValue
    };
  }
  buildFilters(filters) {
    if (Array.isArray(filters) && filters.length > 0) {
      let fullFilter = [];
      for (let i = 0; i < filters.length; i ++) {
        const current = filters[i];
        if (current.filterProperty && current.filterOperator && current.propertyValue) {
          const fill = this.buildFilter(current.filterProperty, current.filterOperator, current.propertyValue);
          fullFilter.push(fill);
        }
      }
      return fullFilter;
    } else {
      return false;
    }
  }
  buildfullObj(kind, numPerPage, page, filter) {
    if (!kind) {
      return false;
    } else {
      let obj = {kind: kind};
      if (numPerPage || numPerPage === 0) {
        obj['numPerPage'] = numPerPage;
      }
      if (page || page === 0) {
        obj['page'] = page;
      }
      if (filter) {
        obj['filter'] = filter;
      }
      console.log(obj);
      return obj;
    }
  }
  runGlobalQuery(query): Observable<any> {
    return this.http.post<any>(apiUrl + '/' + queryString , query, httpOptions);
  }
}
