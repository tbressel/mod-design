import CryptoJS from "crypto-js";

export async function getArticles() {
  return fetch("./datas/products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! : ${response.status}`);
      }
      return response.json();
    })
    .then((jsonData) => {
      // check if data has changed then update the local storage or not
      isDataChanged(jsonData);

      const categories = getCategories(jsonData);
      console.log(categories);

      const jsonCategories = createCategoriesJsonData(categories);
      console.log(jsonCategories);
    })
    .catch((error) => {
      console.error("Oupsss, y'a une couille dans l'pâté! : ", error);
    });
}



/**
 *
 * Function to generate a MD5 hash from a JSON object
 *
 * @param {*} jsonData
 * @returns
 */
function generateMD5(jsonData) {
  const hash = CryptoJS.MD5(JSON.stringify(jsonData));
  return hash.toString(CryptoJS.enc.Hex);
}



/**
 *
 * Function to update the local storage if the data has changed
 *
 * @param {*} jsonData
 */
function isDataChanged(jsonData) {
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
 * @param {*} data
 * @returns
 */
export function getRecentProducts(data) {
  const sortedData = data.sort((a,b) => getTimestampFromDate(b) - getTimestampFromDate(a))
  const selectData = sortedData.slice(0,4);
  console.log(selectData)
  return selectData
}


/**
 * 
 * Function to get all categories
 * 
 * @param {*} data 
 * @returns 
 */
export function getCategories(data) {
    // Get all categories
    const categories = data.map((article) => article.category);
    // Get unique categories
    const uniqueCategories = [...new Set(categories)];

    return uniqueCategories;

}


/**
 * 
 * Function to create a JSON object with categories
 * 
 * @param {*} data 
 * @returns 
 */
export function createCategoriesJsonData(data) {
  const jsonCategories = [];

  data.forEach((category) => {
    jsonCategories.push({
      category: category,
      categoryImg: `/images/${category.toLowerCase().replace("é", "e").split(' ').join('-')}.png`
    });
  });
  localStorage.setItem("jsonCategories", JSON.stringify(jsonCategories));
  return jsonCategories;
}




/**
 * 
 * Function to convert text date into a timestamp value
 * 
 * @param {*} data 
 * @returns 
 */
function getTimestampFromDate(data) {
  return new Date(data.dateAdded).getTime()
}
