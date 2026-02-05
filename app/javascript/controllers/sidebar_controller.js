import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="sidebar"
export default class extends Controller {
  static targets = ["sidebar", "hint"];
  connect() {
    this.sidebarTarget.style.transform = "translateX(-100%)";
    this.sidebarTarget.classList.add("fixed", "z-50", "h-screen");

    this.closeTimeout = null;
    this.isOpen = false;

    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchCurrentX = 0;
    this.isSwiping = false;

    this.boundHandleTouchMove = this.handleTouchMove.bind(this);
    window.addEventListener("touchmove", this.boundHandleTouchMove, {
      passive: false,
    });
  }

  handleTouchStart(event) {
    if (window.innerWidth >= 768) return;

    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.isSwiping = false;
  }

  handleTouchMove(event) {
    if (window.innerWidth >= 768) return;

    this.touchCurrentX = event.touches[0].clientX;
    const deltaX = this.touchCurrentX - this.touchStartX;
    const deltaY = event.touches[0].clientY - this.touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 20) {
      this.isSwiping = true;
      // When scrolling is in progress, the event becomes uncancelable. Trying to preventDeafult for this uncancelable event causes errors.
      if (event.cancelable) {
        event.preventDefault();
      }
    }
  }

  handleTouchEnd() {
    if (window.innerWidth >= 768) return;
    if (!this.isSwiping) return;

    const final_deltaX = this.touchCurrentX - this.touchStartX;
    // const isSwipingFromRightEdge = this.touchStartX >= window.innerWidth - 150;
    const isSwipingFromLeft = this.touchStartX >= window.innerWidth - 350;

    if (final_deltaX > 50 && isSwipingFromLeft && !this.isOpen) this.open();
    if (final_deltaX < -50 && this.isOpen) this.close();

    this.isSwiping = false;
  }

  trackAndOpen(event) {
    if (window.innerWidth < 768) return;

    if (event.clientX <= 12) this.open();
  }
  scheduleCloseTimer() {
    if (window.innerWidth < 768) return;
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

  disconnect() {
    this.cancelCloseTimer();
    window.removeEventListener("touchmove", this.boundHandleTouchMove, {
      passive: false,
    });
  }
}
