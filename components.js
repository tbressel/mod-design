
/**
 * Function to get a template and inject it into the DOM
 *
 * @param {*} component
 */
export function createComponent(component) {
  const template = document.getElementById(component[0]).content.cloneNode(true);
  const goalElement = document.getElementById(component[1]);
  goalElement.appendChild(template);
}



/**
 * Object with the components to be injected into the DOM
 */
export const components = {
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


