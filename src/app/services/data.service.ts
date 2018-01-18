
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISyslog } from '../components/syslog-list/syslog';
import { IOffice } from '../components/office-list/office';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()

export class DataService {

  private _officeUrl = 'https://api.pacdenucdev.com/prod/getAllItems';

  constructor(private _http: HttpClient) { };

  getOfficeData(): Observable<IOffice[]> {
    return this._http.get<IOffice[]>(this._officeUrl)
      // .do(data => console.log('All Offices: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message)
    return Observable.throw(err.message);
  };

}
