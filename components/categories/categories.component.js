/**
 * Function to get a template and inject it into the DOM article
 *
 * @param {*} component
 */
export function createCategoryList(category) {
    const template = document.getElementById('category-template').content.cloneNode(true);
    const goalElement = document.getElementById('category-target');
    template.querySelector(".category__card").setAttribute("id", category.id);
    template.querySelector(".category__card img").src = category.categoryImg;
    template.querySelector(".category__card img").alt = category.category;
    template.querySelector(".category__ttl").textContent = category.category;
    goalElement.appendChild(template);
  }