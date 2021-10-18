import { ID } from '@datorama/akita';

export interface Promotion {
  id: ID;
  subject: string;
  publishedByImageUrl: string;
}

export function createPromotion(params: Partial<Promotion>) {
  return {} as Promotion;
}
