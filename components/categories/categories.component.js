/**
 * Function to get a template and inject it into the DOM article
 *
 * @param {*} component
 */
export function createCategoryList(category) {
    const template = document.getElementById('category-template').content.cloneNode(true);
    const goalElement = document.querySelector('.categories__list');
    template.querySelector(".category-card").setAttribute("id", category.id);
    template.querySelector(".category-card img").src = category.categoryImg;
    template.querySelector(".category-card img").alt = category.category;
    template.querySelector(".category__title").textContent = category.category;
    goalElement.appendChild(template);
  }