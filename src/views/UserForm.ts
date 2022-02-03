export class UserForm {
  
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover
    };
  }

  onButtonClick(): void {
    console.log('Hi there');
  }

  onHeaderHover(): void {
    console.log('H1 was hovered over');
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
      <h1>User Form</h1>
      <input />
      <button>Click Me</button>
    `;
  }

  render(): void {
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.parent.append(template.content);
  }
}