
export function listenHeaderLinks(event) {
    if (event.target && event.target === document.getElementById("burger")) {
        document.querySelector(".overlay").classList.toggle("hidden");
    }
  }