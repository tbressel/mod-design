///////////////////////////////////
////////    IMPORTATIONS   ////////
///////////////////////////////////

// Styles
import "the-new-css-reset/css/reset.css";
import "./index.scss";

// Components
import { createComponent, components } from "./components";
import { createProductCard } from "./components/article/article.component";
import { createCategoryList } from "./components/categories/categories.component";
import { listenFooterLinks } from "./components/footer/footer.component";
import { listenHeaderLinks } from "./components/header/header.component";
import { listenCategoriesLinks, listenCarouselButtons} from "./components/categories/categories.component";
import {listenOverlayLinks,toggleOverlay} from "./components/overlay/overlay.component";
import { loadingResultPage } from "./components/search/search.component";

// Services
import {getRecentProducts, getArticles} from "./components/article/article.service";

// Models
import { Component, Products, Category, Categories } from "./components.model";



///////////////////////////////////
///////// DOM Content   ///////////
///////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  // Create the components
  const componentNames: Array<
    "main" | "header" | "footer" | "navigation" | "categories" | "find"
  > = ["main", "header", "footer", "navigation", "categories", "find"];

  componentNames.forEach((name) => {
    const component: Component = components[name];
    createComponent(component);
  });

  // Get full datas
  getArticles();

  // Display the 4 most recent products
  const jsonDataString: string | null = localStorage.getItem("jsonData");

  if (jsonDataString) {
    const jsonData: Products = JSON.parse(jsonDataString);
    const fourLastRecentProducts: Products = getRecentProducts(jsonData);

    for (let i: number = 0; i < 4; i++) {
      const article: Component = components.article;
      createProductCard(article, fourLastRecentProducts[i]);
    }
  }

  // Display the categories
  const jsonDataCategoriesString: string | null = localStorage.getItem("jsonCategories");

  if (jsonDataCategoriesString) {

    const jsonDataCategories: Categories = JSON.parse(jsonDataCategoriesString);
    for (let category of jsonDataCategories) {
      createCategoryList(category);
    }
  }
// Event listeners for overlay
const overlayElement: HTMLElement | null = document.querySelector(".overlay");
if (overlayElement != null) {
  toggleOverlay(overlayElement);
}

// Event listener on resize window
window.addEventListener("resize", () => {
  if (overlayElement) {
    toggleOverlay(overlayElement);
  }
});

// Event listener when scrolling
window.addEventListener("scroll", () => {
  const elementText: HTMLElement | null = document.querySelector(".main__txt");
  const elementImage: HTMLElement | null = document.querySelector(".main");
  const headerElement: HTMLElement | null = document.querySelector(".header");

  if (elementText && elementImage && headerElement) {
    const elementTextSize: number = elementText.offsetHeight;
    const elementImageSize: number = elementImage.offsetHeight;

    if (window.scrollY > (elementImageSize - elementTextSize) / 2) {
      headerElement.classList.add("bg-header");
    }
    if (window.scrollY === 0) {
      headerElement.classList.remove("bg-header");
    }
  }
});

  // Event listener when click
  document.addEventListener("click", function (event) {
    listenHeaderLinks(event);
    listenOverlayLinks(event);
    listenFooterLinks(event, components, createComponent);
    listenCategoriesLinks(event, components, createComponent);
    listenCarouselButtons(event);

    loadingResultPage(event);
  });
});
