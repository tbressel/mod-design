import { createComponent, components } from "../../components.js";
import { toggleOverlay } from "../overlay/overlay.component.js";
import { createProductCard } from "../article/article.component.js";

/**
 *
 * Function display results
 *
 * @param {*} event
 */
export function loadingResultPage(event) {
  if (event.target.classList.contains("js-find-btn")) {
    const elementField = document.getElementById("find-field");
    const overlayElement = document.querySelector(".overlay");

    document.scrollingElement.scrollTop = 0;

    const value = elementField.value
      .toLowerCase()
      .replaceAll(/[><&{}\[\]@%$]/g, "");
      if (value === "" || value === null || value === undefined || value === " ") {
        alert("Veuillez saisir un mot, non d'une pipe !");
        toggleOverlay(overlayElement);
        return;
      }
    console.log("Je recherche le mot :", value);


    const allResults = searchDataIntoProducts(value);

    toggleOverlay(overlayElement);

    document.getElementById("main-target").innerHTML = "";
    let component = components.results;
    createComponent(component);

    component = components.pagination;
    createComponent(component);

    component = components.resultcard;
    allResults.forEach((result) => {
    createProductCard(component, result);

    });
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
    const filterDescription = product.description
      .toLowerCase()
      .replaceAll(/[><&{}\[\]@%$]/g, "");
    // console.log("Je recherche parmis tous ces textes : ",filterDescription);
    const filterTitle = product.title
      .toLowerCase()
      .replaceAll(/[><&{}\[\]@%$]/g, "");
    // console.log("Je recherche parmis tous ces textes : ",filterTitle);
    const filterCategory = product.category
      .toLowerCase()
      .replaceAll(/[><&{}\[\]@%$]/g, "");
    // console.log("Je recherche parmis tous ces textes : ",filterCategory);

    

    return (
      product.description.toLowerCase().includes(value) ||
      product.title.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
    );
  });
  return result;
}
