
export function listenHeaderLinks(event) {
    if (event.target && event.target === document.getElementById("burger")) {
        document.querySelector(".overlay__main").classList.toggle("hidden");
    }
  }