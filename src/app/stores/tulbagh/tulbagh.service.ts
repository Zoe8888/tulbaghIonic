import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TulbaghStore } from './tulbagh.store';

@Injectable({ providedIn: 'root' })
export class TulbaghService {

  constructor(private tulbaghStore: TulbaghStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.tulbaghStore.set(entities)));
  }

}
