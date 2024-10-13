import { getProductPerCategory } from "./categories.service.js";
import { createProductCard } from "../products/product.component.js";

import { Category } from "./categories.model";


/**
 * Function to get a template and inject it into the DOM article
 *
 * @param {Category} category - The category Json object
 */
export function createCategoryList(category: Category): void {
  const template = (document.getElementById("category-template") as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment;
  const goalElement = document.getElementById("category-target");

  if (goalElement) {
    const cardElement = template.querySelector(".category__card") as HTMLElement;
    const imgElement = template.querySelector(".category__card img") as HTMLImageElement;
    const titleElement = template.querySelector(".category__ttl") as HTMLElement;

    if (cardElement && imgElement && titleElement) {
      cardElement.setAttribute("id", category.id.toString());
      imgElement.src = category.categoryImg;
      imgElement.alt = category.category;
      titleElement.textContent = category.category;
      goalElement.appendChild(template);
    }
  }
}

/**
 *
 * Function to listen to the categories links
 *
 * @param {*} event
 * @param {*} components
 * @param {*} createComponent
 */
export function listenCategoriesLinks(event, components, createComponent) {
  if (event.target.classList.contains("category__img")) {
    document.scrollingElement.scrollTop = 0;
    const productData = getProductPerCategory(event);
    const numberOfPages = productData.length;
    let numberOfProducts = 0;

    for (let i = 0; i < numberOfPages; i++) {
     for (let j = 0; j < productData[i].length; j++) {
       numberOfProducts ++;
      }
    }
    console.log("Nombre de produit : ", numberOfProducts)
    console.log("Nombre de page : ", numberOfPages)

    document.getElementById("main-target").innerHTML = "";
    createComponent(components.productcat);

    for (let p = 0; p < numberOfPages; p++) {
      
      const article = components.productcardcat;
      for (let i = 0; i < productData[p].length; i++) {
        createProductCard(article, productData[p][i]); // article: Array, productData: Object[]
      }
    }

    createComponent(components.pagination);
  }
}



export function listenCarouselButtons(event) {
  if (!document.querySelector(".category__btn")) return;
  const element = document.getElementById("category-target");

  if (event.target.classList.contains("js-pre-btn")) {
    if (element) {
      const scrollAmount = 50;
      element.scrollLeft -= scrollAmount;
    }
  }

  if (event.target.classList.contains("js-fwd-btn")) {
    if (element) {
      const scrollAmount = 50;
      element.scrollLeft += scrollAmount;
    }
  }
}
