import { Offers } from '../models/offer';

export interface OfferServiceSkeleton {
  getOffers(): Promise<Offers | Error>;
}
