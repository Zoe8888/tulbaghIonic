import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BlogStore } from './blog.store';

@Injectable({ providedIn: 'root' })
export class BlogService {

  constructor(private blogStore: BlogStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.blogStore.set(entities)));
  }

}
