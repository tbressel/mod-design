import "the-new-css-reset/css/reset.css";
import "./style.scss";
import { createComponent, createArticle, components } from "./components.js";

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

/**
 * Function to create the article component
 */
component = components.article;
createArticle(component);
createArticle(component);
createArticle(component);
createArticle(component);
createArticle(component);

document.addEventListener("DOMContentLoaded", () => {
  const burgerElement = document.getElementById("burger");
  const crossElement = document.getElementById("cross");
  const overlayElement = document.querySelector(".overlay__main");

  const footerLink1 = document.getElementById('footer-link-1');

  document.addEventListener("click", function (event) {
    if (event.target && event.target === burgerElement) {
      overlayElement.classList.remove("hidden");
    } else if (event.target && event.target === crossElement) {
      overlayElement.classList.add("hidden");
    }

    if (event.target && event.target === footerLink1 ) {
        console.log('lien n°1')
        document.getElementById('main-target').innerHTML="";
        let component = components.text;
        createComponent(component);
    }
    if (event.target && event.target === footerLink2 ) {
        console.log('lien n°2')
        document.getElementById('main-target').innerHTML="";
        let component = components.text;
        createComponent(component);
    }
    if (event.target && event.target === footerLink3 ) {
        console.log('lien n°3')
        document.getElementById('main-target').innerHTML="";
        let component = components.text;
        createComponent(component);
    }



  });

});
