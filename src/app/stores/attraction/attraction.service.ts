import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AttractionStore } from './attraction.store';

@Injectable({ providedIn: 'root' })
export class AttractionService {

  constructor(private attractionStore: AttractionStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.attractionStore.set(entities)));
  }

}
