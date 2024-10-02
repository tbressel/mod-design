import { toggleOverlay } from "../overlay/overlay.component.js";

/**
 *
 * Function to listen to the footer links
 *
 * @param {*} event
 * @param {*} components
 * @param {*} createComponent
 */
export function listenFooterLinks(event, components, createComponent) {
  // Event listener for the footer links
  handleFooterLinkClick(event, components, createComponent, "footer-link-1");
  handleFooterLinkClick(event, components, createComponent, "footer-link-2");
  handleFooterLinkClick(event, components, createComponent, "footer-link-3");
}

/**
 *
 * Function to handle the footer link click
 *
 * @param {*} event
 * @param {*} components
 * @param {*} createComponent
 * @param {*} link
 */
function handleFooterLinkClick(event, components, createComponent, link) {
  if (event.target && event.target === document.getElementById(link)) {
    document.getElementById("main-target").innerHTML = "";
    createComponent(components.text);
    toggleOverlay(document.querySelector(".overlay"));
  }
}
