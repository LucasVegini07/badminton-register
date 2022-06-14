type Offer = {
  id: string;
  pharmacy: string;
  title: string;
  description: string;
  price: number;
};

export interface Offers {
  offers: Offer[];
}
