import { createComponent, components } from "../../components.js";
import { toggleOverlay } from "../overlay/overlay.component.js";
import { createProductCard } from "../products/product.component.js";

// Models
import { Product, Products } from "../products/products.model";

/**
 *
 * Function display results
 *
 * @param {Event} event
 */
export function loadingResultPage(event: Event) {
  // Check if the event target is the search button
  if (event.target && (event.target as HTMLElement).classList.contains("js-find-btn")) {
    const elementField: HTMLElement | null = document.getElementById("find-field");
    const overlayElement = document.querySelector(".overlay") as HTMLElement;
    
    // Just rewind the scrolling to the top of the page
    if(document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }

    // Formating the value to lowercase and removing special characters
    const value: string = (elementField as HTMLTextAreaElement | HTMLInputElement).value.toLowerCase().replaceAll(/[><&{}\[\]@%$]/g, "");
    
    // Check if the search field is empty
      if (value === "" || value === null || value === undefined || value === " ") {
        alert("Veuillez saisir un mot, non d'une pipe !");
        toggleOverlay(overlayElement);
        return;
      }
    console.log("Je recherche le mot :", value);

    // Get the found datas searched with the value
    const allResults: Products = searchDataIntoProducts(value);

    // If the overlay was open then close it
    toggleOverlay(overlayElement);

    // Delete the actual content of the main-target
    (document.getElementById("main-target") as HTMLElement).innerHTML = "";

    // Create the components with the results template html
    let component = components.results;
    createComponent(component);

    // Adding the pagination component in the bottom of the page
    component = components.pagination;
    createComponent(component);

    // Adding the result card component in the main-target
    component = components.resultcard;
    allResults.forEach((result: Product) => {
    createProductCard(component, result);
    });
  }
}


/**
 * 
 * Function to search data into products
 * 
 * @param {string} value typed by the user in the search field 
 * @returns {Product[]} result of the search
 */
function searchDataIntoProducts(value: string): Product[] {

  const jsonDataString : string | null = localStorage.getItem("jsonData");
  
  if (!jsonDataString) return [];

    const jsonData: Products = JSON.parse(jsonDataString);
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
