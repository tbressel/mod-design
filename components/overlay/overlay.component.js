export function listenOverlayLinks(event) {
    if (event.target && event.target === document.getElementById("cross")) {
        document.querySelector(".overlay__main").classList.toggle("hidden");
    }
}


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