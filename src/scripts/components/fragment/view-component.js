import Renderer from './renderer';

class ViewComponent {

  constructor () {
    this.element;
    this.template = `<h3>Place Holder template</h3>`;
    console.log('hey there!, this viewComponent is ', this.constructor.name);
  }

  render () {
    console.log('in ViewComponent render() ', this);
    if (!this.element) {
      console.log('no element???');
    }
    Renderer.render(this.element, this.template);
  }

  attachDOMListeners () {}

}

export default ViewComponent;