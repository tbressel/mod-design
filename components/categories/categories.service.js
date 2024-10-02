

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
  let idCategory = 1;
  data.forEach((category) => {
    jsonCategories.push({
      id: idCategory,
      category: category,
      categoryImg: `/images/${category.toLowerCase().replaceAll("é", "e").split(' ').join('-')}.png`
    });
    idCategory++;
  });
  localStorage.setItem("jsonCategories", JSON.stringify(jsonCategories));
  return jsonCategories;
}


