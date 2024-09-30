import "the-new-css-reset/css/reset.css";
import './style.css';

/**
 * Function to get a template and inject it into the DOM
 * 
 * @param {*} component 
 */
function createComponent(component) {
    const template = document.getElementById(component[0]).content.cloneNode(true);
    const goalElement = document.getElementById(component[1]);
    goalElement.appendChild(template);
    }

/**
 * Function to get a template and inject it into the DOM
 * 
 * @param {*} component 
 */
function createArticle(component) {
    const template = document.getElementById(component[0]).content.cloneNode(true);
    const goalElement = document.querySelector('.' + component[1]);
    goalElement.appendChild(template);
    }

/**
 * Object with the components to be injected into the DOM
 */
const components = {
    header: ["header-template", "header-target"],
    footer: ["footer-template", "footer-target"],
    main:  ["main-template", "main-target"],
    article: ["article-template","main__articles"]
    };


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
 * Function to create the article component
 */
component = components.article;
createArticle(component)
createArticle(component)
createArticle(component)
createArticle(component)
createArticle(component)
