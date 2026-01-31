import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="sidebar"
export default class extends Controller {
  static targets = ["sidebar", "hint"];
  connect() {
    console.log("Sidebar Controller connected!");
    console.log("Has sidebar target?:", this.hasSidebarTarget);
    console.log("Has hint target?:", this.hasHintTarget);
    if (window.innerWidth >= 768) {
      this.sidebarTarget.style.transform = "translateX(-100%)";
      this.sidebarTarget.classList.add("fixed", "z-50", "h-screen");
    }
  }

  mouseMove(event) {
    console.log("Mouse moved to X", event.clientX);
    if (window.innerWidth < 768) return;

    if (event.clientX <= 50) this.open();
  }

  open() {
    console.log("open() called");
    this.sidebarTarget.style.transform = "translateX(0)";
  }

  close() {
    console.log("close() called");
    this.sidebarTarget.style.transform = "translateX(-100%)";
  }
}
