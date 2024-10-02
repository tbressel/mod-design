/**
 * Function to get a template and inject it into the DOM article
 *
 * @param {*} component
 */
export function createArticle(component, product) {
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


