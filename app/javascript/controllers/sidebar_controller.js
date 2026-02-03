import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="sidebar"
export default class extends Controller {
  static targets = ["sidebar", "hint"];
  connect() {
    if (window.innerWidth >= 768) {
      this.sidebarTarget.style.transform = "translateX(-100%)";
      this.sidebarTarget.classList.add("fixed", "z-50", "h-screen");
    }
    this.closeTimeout = null;
    this.isOpen = false;
  }

  trackAndOpen(event) {
    if (window.innerWidth < 768) return;

    if (event.clientX <= 50) this.open();
  }
  scheduleCloseTimer() {
    this.closeTimeout = setTimeout(() => {
      this.close();
    }, 500);
  }

  keepSidebarOpen() {
    if (window.innerWidth < 768) return;
    this.cancelCloseTimer();
  }

  cancelCloseTimer() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  }
  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.sidebarTarget.style.transform = "translateX(0)";
  }

  close() {
    this.isOpen = false;
    this.sidebarTarget.style.transform = "translateX(-100%)";
  }

  disconect() {
    this.cancelCloseTimer();
  }
}
