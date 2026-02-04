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

    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchCurrentX = 0;
    this.isSwiping = false;

    this.boundHandleTouchMove = this.handleTouchMove.bind(this);
    addEventListener("touchmove", this.boundHandleTouchMove, {
      passive: false,
    });
  }

  handleTouchStart(event) {
    if (window.innerWidth >= 768) return;

    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    console.log("Touch starts at X:", this.touchStartX);
    console.log("Touch starts at Y:", this.touchStartY);
    this.isSwiping = false;
  }

  handleTouchMove(event) {
    if (window.innerWidth >= 768) return;

    this.touchCurrentX = event.touches[0].clientX;
    const deltaX = this.touchCurrentX - this.touchStartX;
    const deltaY = event.touches[0].clientY - this.touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 20) {
      this.isSwiping = true;
      console.log("It's a swipe!!", this.isSwiping);
      event.preventDefault();
    }
  }

  handleTouchEnd() {
    if (window.innerWidth >= 768) return;
    if (!this.isSwiping) return;

    const final_deltaX = this.touchCurrentX - this.touchStartX;
    const isSwipingFromRightEdge = this.touchStartX >= window.innerWidth - 20;

    console.log("final_deltaX:", final_deltaX);

    if (final_deltaX < -50 && isSwipingFromRightEdge && !this.isOpen)
      this.open();
    if (final_deltaX > 50) this.close();

    this.isSwiping = false;
  }

  trackAndOpen(event) {
    if (window.innerWidth < 768) return;

    if (event.clientX <= 12) this.open();
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

  disconnect() {
    this.cancelCloseTimer();
    removeEventListener("touchmove", this.boundHandleTouchMove, {
      passive: false,
    });
  }
}
