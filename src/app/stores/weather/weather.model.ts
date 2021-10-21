import { ID } from '@datorama/akita';

export interface Weather {
  id: ID;
  title: string;
}

export function createWeather(params: Partial<Weather>) {
  return {

  } as Weather;
}
