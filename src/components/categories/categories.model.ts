
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