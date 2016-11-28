import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
@Injectable()
export class ApiRequestsService {

  constructor(private http :Http) { }

  getJSONData() {
    return this.http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
  }


}
