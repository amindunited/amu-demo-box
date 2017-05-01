import { ViewComponent } from '../fragment';

class ClickMe extends ViewComponent {

  hasBeenClicked = false;


  attachDOMListeners () {
    this.element.addEventListener('click', (e)=> this.onClick(e));
  }

  afterRender () {
    if (!this.didInit) {
      this.didInit = true;
      this.attachDOMListeners();
    }
  }

  template () {
    if (this.didInit) {
    return `<h3>This instance of ${this.constructor.name} has been clicked</h3>`;
    } else {
      return `<h3>Loading...</h3>`;
    }
  }

  onClick (e) {
    if (this.hasBeenClicked === true) {
      this.element.style.background = "rgb(0, 255, 0)";
      this.hasBeenClicked = false;
    } else {
      this.element.style.background = "rgb(255, 0, 0)";
      this.hasBeenClicked = true;
    }

    this.render();

  }
}

export default ClickMe;