import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AttractionStore, AttractionState } from './attraction.store';

@Injectable({ providedIn: 'root' })
export class AttractionQuery extends QueryEntity<AttractionState> {
  top10: any = this.selectAll();

  constructor(protected store: AttractionStore) {
    super(store);
  }

}
