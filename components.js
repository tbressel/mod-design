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
export function createArticle(component) {
  const template = document
    .getElementById(component[0])
    .content.cloneNode(true);
  const goalElement = document.querySelector("." + component[1]);
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
    console.log("overlayElement.classList", overlayElement.classList);
    console.log ("window.innerWidth", window.innerWidth);
  }
  if (window.innerWidth < 980 && !overlayElement.classList.contains("hidden")) {
    overlayElement.classList.add("hidden");
    console.log("overlayElement.classList", overlayElement.classList);
    console.log ("window.innerWidth", window.innerWidth);
  }
}
