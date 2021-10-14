import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Tulbagh } from './tulbagh.model';

export interface TulbaghState extends EntityState<Tulbagh> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'tulbagh'
})
export class TulbaghStore extends EntityStore<TulbaghState> {

  constructor() {
    super();
  }

}
