import { ID } from '@datorama/akita';

export interface Business {
  id: ID;
  title: string;
  description: string;
}

export function createBusiness(params: Partial<Business>) {
  return {

  } as Business;
}
