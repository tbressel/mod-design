/**
 * Function to get a template and inject it into the DOM
 *
 * @param {*} component
 */
export function createComponent(component) {
  const template = document
    .getElementById(component[0])
    .content.cloneNode(true);
  const goalElement = document.getElementById(component[1]);
  goalElement.appendChild(template);
}

/**
 * Function to get a template and inject it into the DOM
 *
 * @param {*} component
 */
export function createArticle(component, product) {
  console.log("product", product);
  console.log("component", component);
  const template = document.getElementById(component[0]).content.cloneNode(true);
  const goalElement = document.querySelector("." + component[1]);
  template.querySelector(".article__container").setAttribute("id", product.id);
  template.querySelector(".article__title-h2").textContent = product.title;
  template.querySelector(".article__category").textContent = product.category;
  
  template.querySelector(".article__price").textContent = Math.floor(product.price)+'€';
  template.querySelector(".article__price--min").textContent = product.price.toString().split('.')[1];

  template.querySelector(".article__description").textContent = product.description;
  template.querySelector(".article__image img").src = product.imageUrl;
  template.querySelector(".article__image img").alt = product.title;
  goalElement.appendChild(template);
}

/**
 * Object with the components to be injected into the DOM
 */
export const components = {
  header: ["header-template", "header-target"],
  footer: ["footer-template", "footer-target"],
  main: ["main-template", "main-target"],
  article: ["article-template", "main__articles"],
  navigation: ["navigation-template", "navigation-target"],
  text: ["text-template", "main-target"],
};

/**
 *
 * Function to toggle the overlay
 *
 * @param {*} overlayElement
 */
export function toggleOverlay(overlayElement) {
  if (window.innerWidth > 980 && overlayElement.classList.contains("hidden")) {
    overlayElement.classList.remove("hidden");
  }
  if (window.innerWidth < 980 && !overlayElement.classList.contains("hidden")) {
    overlayElement.classList.add("hidden");
  }
}
