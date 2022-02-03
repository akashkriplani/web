import { User } from '../models/User';

export class UserForm {
  
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick
    };
  }

  onSetAgeClick(): void {
    console.log('Hi there');
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
      <div>User name: ${this.model.get('name')}</div>
      <div>User age: ${this.model.get('age')}</div>
      <input />
      <button>Click Me</button>
      <button class="set-age">Set Random Age</button>
    `;
  }

  render(): void {
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.parent.append(template.content);
  }
}