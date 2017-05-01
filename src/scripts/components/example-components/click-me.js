import { ViewComponent } from '../fragment';

class ClickMe extends ViewComponent {
  constructor () {
    super();
    console.log('click me init!', this, this.element);
  }

  attachDOMListeners () {
    console.log('attachDOMListeners ', this);
    this.element.addEventListener('click', (e)=> this.onClick(e));
  }

  onClick (e) {
    console.log('caught a click', e, e.target.style.background, this.element);
    if (this.element.style.background === "rgb(255, 0, 0)") {
      this.element.style.background = "rgb(0, 255, 0)";
    } else {
      this.element.style.background = "rgb(255, 0, 0)";
    }

    this.template = `<h3>This instance of ${this.constructor.name} has been clicked</h3>`;
    this.render();

  }
}

export default ClickMe;