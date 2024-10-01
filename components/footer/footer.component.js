export function listenFooterLinks(event, components, createComponent) {
    // Event listener for the footer links
    if (event.target && event.target === document.getElementById("footer-link-1")) {
      document.getElementById("main-target").innerHTML = "";
      let component = components.text;
      createComponent(component);
    }
    if (event.target && event.target === document.getElementById("footer-link-2")) {
      document.getElementById("main-target").innerHTML = "";
      let component = components.text;
      createComponent(component);
    }
    if (event.target && event.target === document.getElementById("footer-link-3")) {
      document.getElementById("main-target").innerHTML = "";
      let component = components.text;
      createComponent(component);
    }

  }