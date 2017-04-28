

class DomWriter {

  constructor () {}

  updateElement(element, content) {
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    } else if (!element) {
      this.element = document.querySelector('body');
    } else {
      this.element = element;
    }

    this.element.innerHTML = content;
  }

}

export default new DomWriter();