/**
 * Function to get a template and inject it into the DOM article
 *
 * @param {*} component
 */
export function createArticle(component, product) {
  const template = document.getElementById(component[0]).content.cloneNode(true);
  const goalElement = document.getElementById(component[1]);
  template.querySelector(".product__container").setAttribute("id", product.id);
  template.querySelector(".product__ttl").textContent = product.title;
  template.querySelector(".product__category").textContent = product.category;
  
  template.querySelector(".product__price-int").textContent = Math.floor(product.price)+'€';
  template.querySelector(".product__price-dec").textContent = product.price.toString().split('.')[1];

  template.querySelector(".product__description").textContent = product.description;
  template.querySelector(".product__image img").src = product.imageUrl;
  template.querySelector(".product__image img").alt = product.title;
  goalElement.appendChild(template);
}


