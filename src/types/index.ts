export type Category = 
  | 'complete' 
  | 'simple' 
  | 'simple-vinaigrette' 
  | 'simple-mayo' 
  | 'simple-all' 
  | 'portion';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: Category;
  image?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
