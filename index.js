///////////////////////////////////
////////    IMPORTATIONS   ////////
///////////////////////////////////

// Styles
import "the-new-css-reset/css/reset.css";
import "./index.scss";

// Components
import { createComponent, components } from "./components.js";
import { createArticle } from "./components/article/article.component.js";
import { listenFooterLinks } from "./components/footer/footer.component.js";
import { listenHeaderLinks } from "./components/header/header.component.js";
import {
  listenOverlayLinks,
  toggleOverlay,
} from "./components/overlay/overlay.component.js";

// Services
import {
  getRecentProducts,
  getArticles,
} from "./components/article/article.service.js";

///////////////////////////////////
///////// DOM Content   ///////////
///////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  // Create the components
  const componentNames = [
    "main",
    "header",
    "footer",
    "navigation",
    "categories",
  ];

  componentNames.forEach((name) => {
    const component = components[name];
    createComponent(component);
  });

  // Get full datas
  getArticles();

  // Get the JSON data from the local storage
  const jsonData = JSON.parse(localStorage.getItem("jsonData"));

  // Display the 4 most recent products
  const fourLastRecentProducts = getRecentProducts(jsonData);
  for (let i = 0; i < 4; i++) {
    const article = components.article;
    createArticle(article, fourLastRecentProducts[i]);
  }



  // Event listeners for overlay
  const overlayElement = document.querySelector(".overlay__main");
  toggleOverlay(overlayElement);

  // Event listener on resize window
  window.addEventListener("resize", () => {
    toggleOverlay(overlayElement);
  });

  // Event listener  when scrolling
  window.addEventListener("scroll", () => {
    const elementTextSize =
      document.querySelector(".header__text").offsetHeight;
    const elementImageSize =
      document.querySelector(".main__header").offsetHeight;
    if (window.scrollY > (elementImageSize - elementTextSize) / 2) {
      document.querySelector(".header__top").classList.add("bg-header");
    }
    if (window.scrollY === 0) {
      document.querySelector(".header__top").classList.remove("bg-header");
    }
  });

  // Event listener when click
  document.addEventListener("click", function (event) {
    listenHeaderLinks(event);
    listenOverlayLinks(event);
    listenFooterLinks(event, components, createComponent);
  });
});
