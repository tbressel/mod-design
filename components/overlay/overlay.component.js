
/**
 * 
 * Function to listen to the overlay links
 * 
 * @param {*} event 
 */
export function listenOverlayLinks(event) {
    if (event.target && event.target === document.getElementById("cross")) {
        document.querySelector(".overlay").classList.toggle("hidden");
    }
}


/**
 *
 * Function to toggle the overlay
 *
 * @param {*} overlayElement
 */
export function toggleOverlay(overlayElement) {
    if (window.innerWidth > 1100 && overlayElement.classList.contains("hidden")) {
      overlayElement.classList.remove("hidden");
    }
    if (window.innerWidth < 1100 && !overlayElement.classList.contains("hidden")) {
      overlayElement.classList.add("hidden");
    }
  }