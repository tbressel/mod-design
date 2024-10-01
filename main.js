import "the-new-css-reset/css/reset.css";
import "./style.scss";
import {
  createComponent,
  createArticle,
  components,
  toggleOverlay,
} from "./components.js";
import { getArticles, getRecentProducts } from "./data.js";

/**
 * Function to create the main component
 */
let component = components.main;
createComponent(component);
/**
 * Function to create the header and footer components
 */
component = components.header;
createComponent(component);

/**
 * Function to create the footer component
 */
component = components.footer;
createComponent(component);

/**
 * Function to create the navigation components
 */
component = components.navigation;
createComponent(component);

document.addEventListener("DOMContentLoaded", () => {
  getArticles();

  const jsonData = JSON.parse(localStorage.getItem("jsonData"));
  console.log("jsonDat", jsonData);

  const fourLastRecentProducts = getRecentProducts(jsonData);
  console.log("Les 4 objets les plus récents :", fourLastRecentProducts);

for (let i = 0; i < 4; i++) {
    const article = components.article;
    createArticle(article, fourLastRecentProducts[i]);
  }

  const burgerElement = document.getElementById("burger");
  const crossElement = document.getElementById("cross");
  const overlayElement = document.querySelector(".overlay__main");

  const footerLink1 = document.getElementById("footer-link-1");
  const footerLink2 = document.getElementById("footer-link-2");
  const footerLink3 = document.getElementById("footer-link-3");

  toggleOverlay(overlayElement);

  window.addEventListener("resize", () => {
    toggleOverlay(overlayElement);
  });

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

  document.addEventListener("click", function (event) {
    if (event.target && event.target === burgerElement) {
      overlayElement.classList.toggle("hidden");
    } else if (event.target && event.target === crossElement) {
      overlayElement.classList.toggle("hidden");
    }

    if (event.target && event.target === footerLink1) {
      document.getElementById("main-target").innerHTML = "";
      let component = components.text;
      createComponent(component);
    }
    if (event.target && event.target === footerLink2) {
      document.getElementById("main-target").innerHTML = "";
      let component = components.text;
      createComponent(component);
    }
    if (event.target && event.target === footerLink3) {
      document.getElementById("main-target").innerHTML = "";
      let component = components.text;
      createComponent(component);
    }
  });
});
