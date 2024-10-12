/**
 * Component describe the structure of a component sent to the createComponent function
 * the first string is the source of the template
 * the second string is the destination of the template
 */
export type Component = [string, string];


/**
 * Product is the structure of a product, include in each object of the json file
 */
export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrls: string;
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


/**
 * Category is the structure of a category, include in each object of the json file
 */
export interface Category {
  id: number;
  category: string;
  categoryImg: string;
}

/**
 * The whole json file is an array of categories
 */
export type Categories = Category[];