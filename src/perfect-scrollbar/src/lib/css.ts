export function get(element: HTMLElement): CSSStyleDeclaration {
  return getComputedStyle(element);
}

export function set(element: any, obj: any) {
  for (const key in obj) {
    let val = obj[key];
    if (typeof val === 'number') {
      val = `${val}px`;
    }
    element.style[key] = val;
  }
  return element;
}
