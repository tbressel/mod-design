export function loadingResultPage(event) {
  if (event.target.classList.contains("js-find-btn")) {
    const elementField = document.getElementById("find-field");

    const value = elementField.value.toLowerCase().replaceAll(/[><&{}\[\]@%$]/g, "");
    console.log("Je recherche le mot :",value);

    searchDataIntoProducts(value);
  }
}


/**
 * 
 * Function to search data into products
 * 
 * @param {*} value 
 */
function searchDataIntoProducts(value) {
  const jsonData = JSON.parse(localStorage.getItem("jsonData"));
// console.log(jsonData);
  const result = jsonData.filter((product) => {
    const filterDescription = product.description.toLowerCase().replaceAll(/[><&{}\[\]@%$]/g, "");
    // console.log("Je recherche parmis tous ces textes : ",filterDescription);
    const filterTitle = product.title.toLowerCase().replaceAll(/[><&{}\[\]@%$]/g, "");
    // console.log("Je recherche parmis tous ces textes : ",filterTitle);
    const filterCategory = product.category.toLowerCase().replaceAll(/[><&{}\[\]@%$]/g, "");
    // console.log("Je recherche parmis tous ces textes : ",filterCategory);

   return product.description.toLowerCase().includes(value) || product.title.toLowerCase().includes(value) || product.category.toLowerCase().includes(value);
  });
  console.log('résultat de la recherche', result);
}