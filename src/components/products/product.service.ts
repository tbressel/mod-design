import CryptoJS from "crypto-js";
import { getCategories, createCategoriesJsonData } from "../categories/categories.service";
import { Products, Product } from "../../products.model";


export async function getAllProducts() {
  try {
    const response: Response = await fetch("./datas/products.json");
    if (!response.ok) {
      throw new Error(`Erreur HTTP! : ${response.status}`);
    }
    const jsonData: Products = await response.json();
    
    // check if data has changed then update the local storage or not
    isDataChanged(jsonData);


    const categories = getCategories(jsonData);
    const jsonCategories = createCategoriesJsonData(categories);
  } catch (error) {
    console.error("Oupsss, y'a une couille dans l'pâté! : ", error);
  } finally {
    console.log("Fetch attempt finished.");
  }
}



/**
 *
 * Function to generate a MD5 hash from a JSON object
 *
 * @param {Products} jsonData
 * @returns {string} hash encrypted with CryptoJS
 */
function generateMD5(jsonData: Products): string {
  const hash = CryptoJS.MD5(JSON.stringify(jsonData));
  return hash.toString(CryptoJS.enc.Hex);
}



/**
 *
 * Function to update the local storage if the data has changed
 *
 * @param {Products} jsonData with all the products
 */
function isDataChanged(jsonData: Products) {
  const newHash = generateMD5(jsonData);
  const storedHash = localStorage.getItem("jsonDataHash");

  if (newHash !== storedHash) {
    localStorage.setItem("jsonDataHash", newHash);
    localStorage.setItem("jsonData", JSON.stringify(jsonData));
    console.warn("updated datas");
  } else {
    console.log("no update needed");
  }
}



/**
 *
 * Function to get the 4 most recent objects
 *
 * @param {Products} data contains all products
 * @returns Products with the 4 most recent products
 */
export function getRecentProducts(data: Products): Products {
  const sortedData = data.sort((a: Product,b: Product) => getTimestampFromDate(b) - getTimestampFromDate(a))
  const selectData = sortedData.slice(0,4);
  return selectData
}


/**
 * 
 * Function to convert text date into a timestamp value
 * 
 * @param {Product} product 
 * @returns number
 */
function getTimestampFromDate(product: Product): number {
  return new Date(product.dateAdded).getTime()
}
