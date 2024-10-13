import { Component } from "../../components.model";
import { Product } from "../../products.model";

/**
 * Function to get a template and inject it into the DOM article
 *
 * @param {Component} component: array with the component name and the target element
 * @param {Rroduct} product: object with all the field of the product data
 */
export function createProductCard(component: Component, product: Product): void {
  const template = (document.getElementById(component[0] as string) as HTMLTemplateElement).content.cloneNode(true) as DocumentFragment;
  const goalElement: HTMLElement | null = document.getElementById(component[1] as string);

  if (goalElement) {
    const container = template.querySelector(".product__container");
    const title = template.querySelector(".product__ttl");
    const category = template.querySelector(".product__category");
    const priceInt = template.querySelector(".product__price-int");
    const priceDec = template.querySelector(".product__price-dec");
    const description = template.querySelector(".product__description");
    const image = template.querySelector(".product__image img") as HTMLImageElement;

    if (container && title && category && priceInt && priceDec && description && image) {
      container.setAttribute("id", product.id.toString());
      title.textContent = product.title;
      category.textContent = product.category;
      priceInt.textContent = Math.floor(product.price) + '€';
      priceDec.textContent = product.price.toString().split('.')[1] || '00';
      description.textContent = product.description;
      image.src = product.imageUrl;
      image.alt = product.title;
      goalElement.appendChild(template);
    } else {
      console.error("One or more elements were not found in the template.");
    }
  } else {
    console.error("Goal element not found.");
  }
}


