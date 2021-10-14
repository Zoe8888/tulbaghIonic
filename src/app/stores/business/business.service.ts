import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BusinessStore } from './business.store';

@Injectable({ providedIn: 'root' })
export class BusinessService {

  constructor(private businessStore: BusinessStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.businessStore.set(entities)));
  }

}
