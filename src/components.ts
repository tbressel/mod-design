import { ComponentsId, Component } from "./components.model";


/**
 * Function to get a template and inject it into the DOM
 *
 * @param {[Component]} component : the component to inject into the DOM with the source and the destination
 */
export function createComponent(component: Component): void { 
  const template: Node = (document.getElementById(component[0]) as HTMLTemplateElement).content.cloneNode(true);
  const goalElement: HTMLElement | null = document.getElementById(component[1]);
  if (goalElement) {
    goalElement.appendChild(template);
  }
}



/**
 * Object with the components to be injected into the DOM
 */
export const components: ComponentsId = {
  header: ["header-template", "header-target"],
  footer: ["footer-template", "footer-target"],
  main: ["main-template", "main-target"],
  article: ["article-template", "product-target"],
  productcardcat: ["article-template", "product-cat-target"],
  navigation: ["navigation-template", "navigation-target"],
  text: ["text-template", "main-target"],
  categories: ["categories-template","categories-target"],
  category: ["category-template", "category-target"],
  productcat: ["product-cat-template", "main-target"],
  pagination: ["pagination-template", "pagination-target"],
  find: ["find-template", "find-target"],
  results: ["results-template", "main-target"],
  resultcard: ["article-template", "results-target"],
};


