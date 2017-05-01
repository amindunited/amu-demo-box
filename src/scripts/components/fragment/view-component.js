import { observable } from 'mobx';
import Renderer from './renderer';

class ViewComponent {

  element;
  constructor () {}

  template () {
    return `<h3>Place Holder template</h3>`;
  }

  beforeRender () {}

  render () {
    return Renderer.render(this).then(()=> {
     this.afterRender();
    });
  }

  afterRender () {}

  attachDOMListeners () {}

}

export default ViewComponent;