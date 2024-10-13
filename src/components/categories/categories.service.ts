import  {Products, Product} from '../products/products.model'
import {Categories} from './categories.model'
/**
 * 
 * Function to get all categories
 * 
 * @param {Products} data with all the products 
 * @returns string[] with all the categories
 */
export function getCategories(data: Products): string[] {
    // Get all categories
    const categories: string[] = data.map((article: Product) => article.category);
    // Get unique categories
    const uniqueCategories: string [] = [...new Set(categories)];
    return uniqueCategories;

}



/**
 * 
 * Function to create a JSON object with categories
 * 
 * @param {Products} products with all the products 
 * @returns a new JSON object with all the categories and details
 */
export function createCategoriesJsonData(categories: string[]): Categories {
  const jsonCategories: Categories = [];
  let idCategory = 1;
  categories.forEach((categoryName: string) => {
    jsonCategories.push({
      id: idCategory,
      category: categoryName,
      categoryImg: `/images/${categoryName.toLowerCase().replaceAll("é", "e").split(' ').join('-')}.webp`
    });
    idCategory++;
  });
  localStorage.setItem("jsonCategories", JSON.stringify(jsonCategories));
  return jsonCategories;
}


/**
 * 
 * Function to filter products by category
 * 
 * @param {*} jsonData 
 * @param {*} category 
 * @returns 
 */
export function filterByCategory(jsonData, category) {
  const newData = Array.isArray(jsonData) ? jsonData : [jsonData];
  const result = newData.filter(product => product.category === category);
  return result
}

/**
 * 
 * Function to create product pages
 * 
 * @param {*} products 
 * @returns 
 */
export function productPages(products) {
  const pages = Math.ceil(products.length / 4);
  const productPages = [];
  for (let i = 0; i < pages; i++) {
    productPages.push(products.slice(i * 4, i * 4 + 4));
  }
  return productPages;
}


/**
 * 
 * Function to get the products per category
 * 
 * @param {*} event 
 * @returns 
 */
export function getProductPerCategory(event) {
  const jsonData = JSON.parse(localStorage.getItem("jsonData"));
  const products = filterByCategory(jsonData, event.target.alt);
  const pages = productPages(products);

  return pages;
}