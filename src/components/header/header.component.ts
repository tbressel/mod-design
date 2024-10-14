
/**
 * 
 * Function to listen the click mouse event on the header links
 * 
 * @param {Event} event The HTML element listened by the click mouse event
 */
export function listenHeaderLinks(event: Event) {
    if (event.target && event.target === document.getElementById("burger")) {
        document.querySelector(".overlay")?.classList.toggle("hidden");
    }
  }