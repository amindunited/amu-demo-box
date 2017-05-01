import Registry from './registry';

class Renderer {

  currentInstances = [];

  /*
   * Sets a parnet element for the engine to attach to
   */
  init (parentElement) {
    if (typeof parentElement === 'string') {
      this.parentElement = document.querySelector(parentElement);
    } else if (!parentElement) {
      this.parentElement = document.querySelector('body');
    } else {
      this.parentElement = parentElement;
    }
    this.run();
  }

  /*
   * Finds all component references in the DOM, and create a new instance of the relevant class
   */
  findComponents (container) {

    let components = Registry.getAll();
    let keys = Object.keys(components)

    for (let i in keys) {

      let Component = components[keys[i]];
      let dashedName = Component.name.replace(/([A-Z])/g, (g) => '-' + g[0].toLowerCase());
      dashedName = dashedName.slice(1);

      let instances = document.querySelectorAll(dashedName);

      instances.forEach((val) => {
        let element = val;
        let component = new Component();
        component.element = element;
        this.currentInstances.push({
          name: dashedName,
          component: component
        });
      });
    };
  }

  /*
   * Given a component reference, removes the child nodes and replaces them with the result of the component's template function
   */
  render (component) {
    let container = component.element;
    let template = component.template();
    let promise = new Promise((resolve)=>{
      let frag = document.createDocumentFragment();
      let range = document.createRange();
      let valueHTML = range.createContextualFragment(template);
      frag.appendChild(valueHTML);

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(frag);
      resolve();
    });
    return promise;
  }

  /*
   * runs the render function for all children of a given component
   */
  run (container) {
    let _container = container ? container : this.parentElement;
    let components = this.findComponents(_container);

    this.currentInstances.forEach((val) => {
      val.component.render().then(()=>{});
    });
    

  }

}

export default new Renderer();