export function createRipple(this: HTMLAnchorElement | HTMLButtonElement, event: MouseEvent) {
    const tag = this instanceof HTMLAnchorElement ? "a" : "button"
    const button = event.currentTarget as typeof this;
    const btnRect = button.getBoundingClientRect();

    const circle = button.querySelector("span") as HTMLSpanElement;
    const diameter = Math.max(btnRect.width, btnRect.height);
    const radius = diameter / 2;
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btnRect.left + radius)}px`;
    circle.style.top = `${event.clientY - (btnRect.top + radius)}px`;

    const ripple = document.querySelectorAll(`${tag} span`)[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }