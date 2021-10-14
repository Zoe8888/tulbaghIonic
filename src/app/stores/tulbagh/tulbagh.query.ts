import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TulbaghStore, TulbaghState } from './tulbagh.store';

@Injectable({ providedIn: 'root' })
export class TulbaghQuery extends QueryEntity<TulbaghState> {

  constructor(protected store: TulbaghStore) {
    super(store);
  }

}
