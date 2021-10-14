import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LikedStore } from './liked.store';

@Injectable({ providedIn: 'root' })
export class LikedService {

  constructor(private likedStore: LikedStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.likedStore.set(entities)));
  }

}
