import { getProductPerCategory } from "./categories.service.js";
import { createProductCard } from "../article/article.component.js";
/**
 * Function to get a template and inject it into the DOM article
 *
 * @param {*} component
 */
export function createCategoryList(category) {
  const template = document
    .getElementById("category-template")
    .content.cloneNode(true);
  const goalElement = document.getElementById("category-target");
  template.querySelector(".category__card").setAttribute("id", category.id);
  template.querySelector(".category__card img").src = category.categoryImg;
  template.querySelector(".category__card img").alt = category.category;
  template.querySelector(".category__ttl").textContent = category.category;
  goalElement.appendChild(template);
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
