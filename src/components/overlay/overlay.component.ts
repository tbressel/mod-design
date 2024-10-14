
/**
 * 
 * Function to listen to the overlay links
 * 
 * @param {Event} event received by the mouse click event
 */
export function listenOverlayLinks(event: Event) {
    if (event.target && event.target === document.getElementById("cross")) {
        document.querySelector(".overlay")?.classList.toggle("hidden");
    }
}


/**
 *
 * Function to toggle the overlay
 *
 * @param {HTMLElement} overlayElement
 */
export function toggleOverlay(overlayElement: HTMLElement) {
    if (window.innerWidth > 1100 && overlayElement.classList.contains("hidden")) {
      overlayElement.classList.remove("hidden");
    }
    if (window.innerWidth < 1100 && !overlayElement.classList.contains("hidden")) {
      overlayElement.classList.add("hidden");
    }
  }