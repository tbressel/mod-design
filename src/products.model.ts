/**
 * Product is the structure of a product, include in each object of the json file
 */
export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  productUrl: string;
  price: number;
  category: string;
  colors: string[];
  dateAdded: string;
}

/**
 * The whole json file is an array of products
 */
export type Products = Product[];
